require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get —no-test-framework" do
    get :—no-test-framework
    assert_response :success
  end

end
