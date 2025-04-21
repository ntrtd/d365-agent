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
import { PayIntV1VariableCompensationTypes } from './PayIntV1VariableCompensationTypes';

/**
 * Request builder class for operations supported on the {@link PayIntV1VariableCompensationTypes} entity.
 */
export class PayIntV1VariableCompensationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1VariableCompensationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1VariableCompensationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1VariableCompensationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1VariableCompensationTypes<T>, T> {
    return new GetAllRequestBuilder<PayIntV1VariableCompensationTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1VariableCompensationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1VariableCompensationTypes`.
   */
  create(
    entity: PayIntV1VariableCompensationTypes<T>
  ): CreateRequestBuilder<PayIntV1VariableCompensationTypes<T>, T> {
    return new CreateRequestBuilder<PayIntV1VariableCompensationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1VariableCompensationTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayIntV1VariableCompensationTypes.dataAreaId}.
   * @param variableCompensationType Key property. See {@link PayIntV1VariableCompensationTypes.variableCompensationType}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1VariableCompensationTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    variableCompensationType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1VariableCompensationTypes<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1VariableCompensationTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VariableCompensationType: variableCompensationType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1VariableCompensationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1VariableCompensationTypes`.
   */
  update(
    entity: PayIntV1VariableCompensationTypes<T>
  ): UpdateRequestBuilder<PayIntV1VariableCompensationTypes<T>, T> {
    return new UpdateRequestBuilder<PayIntV1VariableCompensationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1VariableCompensationTypes`.
   * @param dataAreaId Key property. See {@link PayIntV1VariableCompensationTypes.dataAreaId}.
   * @param variableCompensationType Key property. See {@link PayIntV1VariableCompensationTypes.variableCompensationType}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1VariableCompensationTypes`.
   */
  delete(
    dataAreaId: string,
    variableCompensationType: string
  ): DeleteRequestBuilder<PayIntV1VariableCompensationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1VariableCompensationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1VariableCompensationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1VariableCompensationTypes<T>
  ): DeleteRequestBuilder<PayIntV1VariableCompensationTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    variableCompensationType?: string
  ): DeleteRequestBuilder<PayIntV1VariableCompensationTypes<T>, T> {
    return new DeleteRequestBuilder<PayIntV1VariableCompensationTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayIntV1VariableCompensationTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VariableCompensationType: variableCompensationType!
          }
    );
  }
}
