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
import { EmploymentJobFunctions } from './EmploymentJobFunctions';

/**
 * Request builder class for operations supported on the {@link EmploymentJobFunctions} entity.
 */
export class EmploymentJobFunctionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmploymentJobFunctions<T>, T> {
  /**
   * Returns a request builder for querying all `EmploymentJobFunctions` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentJobFunctions` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentJobFunctions<T>, T> {
    return new GetAllRequestBuilder<EmploymentJobFunctions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EmploymentJobFunctions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentJobFunctions`.
   */
  create(
    entity: EmploymentJobFunctions<T>
  ): CreateRequestBuilder<EmploymentJobFunctions<T>, T> {
    return new CreateRequestBuilder<EmploymentJobFunctions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmploymentJobFunctions` entity based on its keys.
   * @param dataAreaId Key property. See {@link EmploymentJobFunctions.dataAreaId}.
   * @param functionName Key property. See {@link EmploymentJobFunctions.functionName}.
   * @returns A request builder for creating requests to retrieve one `EmploymentJobFunctions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmploymentJobFunctions<T>, T> {
    return new GetByKeyRequestBuilder<EmploymentJobFunctions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FunctionName: functionName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentJobFunctions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentJobFunctions`.
   */
  update(
    entity: EmploymentJobFunctions<T>
  ): UpdateRequestBuilder<EmploymentJobFunctions<T>, T> {
    return new UpdateRequestBuilder<EmploymentJobFunctions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentJobFunctions`.
   * @param dataAreaId Key property. See {@link EmploymentJobFunctions.dataAreaId}.
   * @param functionName Key property. See {@link EmploymentJobFunctions.functionName}.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentJobFunctions`.
   */
  delete(
    dataAreaId: string,
    functionName: string
  ): DeleteRequestBuilder<EmploymentJobFunctions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentJobFunctions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentJobFunctions` by taking the entity as a parameter.
   */
  delete(
    entity: EmploymentJobFunctions<T>
  ): DeleteRequestBuilder<EmploymentJobFunctions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    functionName?: string
  ): DeleteRequestBuilder<EmploymentJobFunctions<T>, T> {
    return new DeleteRequestBuilder<EmploymentJobFunctions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EmploymentJobFunctions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionName: functionName!
          }
    );
  }
}
