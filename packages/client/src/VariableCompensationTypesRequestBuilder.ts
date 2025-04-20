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
import { VariableCompensationTypes } from './VariableCompensationTypes';

/**
 * Request builder class for operations supported on the {@link VariableCompensationTypes} entity.
 */
export class VariableCompensationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VariableCompensationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `VariableCompensationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `VariableCompensationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<VariableCompensationTypes<T>, T> {
    return new GetAllRequestBuilder<VariableCompensationTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VariableCompensationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VariableCompensationTypes`.
   */
  create(
    entity: VariableCompensationTypes<T>
  ): CreateRequestBuilder<VariableCompensationTypes<T>, T> {
    return new CreateRequestBuilder<VariableCompensationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VariableCompensationTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link VariableCompensationTypes.dataAreaId}.
   * @param variableCompensationType Key property. See {@link VariableCompensationTypes.variableCompensationType}.
   * @returns A request builder for creating requests to retrieve one `VariableCompensationTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    variableCompensationType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VariableCompensationTypes<T>, T> {
    return new GetByKeyRequestBuilder<VariableCompensationTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VariableCompensationType: variableCompensationType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VariableCompensationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VariableCompensationTypes`.
   */
  update(
    entity: VariableCompensationTypes<T>
  ): UpdateRequestBuilder<VariableCompensationTypes<T>, T> {
    return new UpdateRequestBuilder<VariableCompensationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VariableCompensationTypes`.
   * @param dataAreaId Key property. See {@link VariableCompensationTypes.dataAreaId}.
   * @param variableCompensationType Key property. See {@link VariableCompensationTypes.variableCompensationType}.
   * @returns A request builder for creating requests that delete an entity of type `VariableCompensationTypes`.
   */
  delete(
    dataAreaId: string,
    variableCompensationType: string
  ): DeleteRequestBuilder<VariableCompensationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VariableCompensationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VariableCompensationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: VariableCompensationTypes<T>
  ): DeleteRequestBuilder<VariableCompensationTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    variableCompensationType?: string
  ): DeleteRequestBuilder<VariableCompensationTypes<T>, T> {
    return new DeleteRequestBuilder<VariableCompensationTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VariableCompensationTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VariableCompensationType: variableCompensationType!
          }
    );
  }
}
