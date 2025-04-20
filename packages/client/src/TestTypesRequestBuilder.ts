/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { TestTypes } from './TestTypes';

/**
 * Request builder class for operations supported on the {@link TestTypes} entity.
 */
export class TestTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TestTypes<T>, T> {
  /**
   * Returns a request builder for querying all `TestTypes` entities.
   * @returns A request builder for creating requests to retrieve all `TestTypes` entities.
   */
  getAll(): GetAllRequestBuilder<TestTypes<T>, T> {
    return new GetAllRequestBuilder<TestTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TestTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TestTypes`.
   */
  create(entity: TestTypes<T>): CreateRequestBuilder<TestTypes<T>, T> {
    return new CreateRequestBuilder<TestTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TestTypes` entity based on its keys.
   * @param testId Key property. See {@link TestTypes.testId}.
   * @returns A request builder for creating requests to retrieve one `TestTypes` entity based on its keys.
   */
  getByKey(
    testId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TestTypes<T>, T> {
    return new GetByKeyRequestBuilder<TestTypes<T>, T>(this.entityApi, {
      TestId: testId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TestTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TestTypes`.
   */
  update(entity: TestTypes<T>): UpdateRequestBuilder<TestTypes<T>, T> {
    return new UpdateRequestBuilder<TestTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TestTypes`.
   * @param testId Key property. See {@link TestTypes.testId}.
   * @returns A request builder for creating requests that delete an entity of type `TestTypes`.
   */
  delete(testId: string): DeleteRequestBuilder<TestTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TestTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TestTypes` by taking the entity as a parameter.
   */
  delete(entity: TestTypes<T>): DeleteRequestBuilder<TestTypes<T>, T>;
  delete(testIdOrEntity: any): DeleteRequestBuilder<TestTypes<T>, T> {
    return new DeleteRequestBuilder<TestTypes<T>, T>(
      this.entityApi,
      testIdOrEntity instanceof TestTypes
        ? testIdOrEntity
        : { TestId: testIdOrEntity! }
    );
  }
}
