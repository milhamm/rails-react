class Api::V1::RecipesController < ApplicationController
  def index
    recipe = Recipe.all.order(created_at: :desc)
    render json: recipe, status: :ok
  end

  def create
    recipe = Recipe.create!(recipe_params)
    if recipe
      render json: recipe
    else
      render json: recipe.errors
    end
  end

  def show
    if recipe
      render json: recipe, status: :ok
    else
      render json: {}, status: :not_found
    end
  end

  def destroy
    recipe&.destroy
    render json: { message: "Recipe deleted!" }, status: :no_content
  end

  private

  def recipe_params
    params.permit(:name, :image, :ingredients, :instruction)
  end

  def recipe
    begin
      @recipe = Recipe.find(params[:id])
    rescue => exception
      puts exception
    end
  end
end
