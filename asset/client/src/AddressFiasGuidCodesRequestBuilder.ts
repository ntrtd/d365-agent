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
import { AddressFiasGuidCodes } from './AddressFiasGuidCodes';

/**
 * Request builder class for operations supported on the {@link AddressFiasGuidCodes} entity.
 */
export class AddressFiasGuidCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressFiasGuidCodes<T>, T> {
  /**
   * Returns a request builder for querying all `AddressFiasGuidCodes` entities.
   * @returns A request builder for creating requests to retrieve all `AddressFiasGuidCodes` entities.
   */
  getAll(): GetAllRequestBuilder<AddressFiasGuidCodes<T>, T> {
    return new GetAllRequestBuilder<AddressFiasGuidCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressFiasGuidCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressFiasGuidCodes`.
   */
  create(
    entity: AddressFiasGuidCodes<T>
  ): CreateRequestBuilder<AddressFiasGuidCodes<T>, T> {
    return new CreateRequestBuilder<AddressFiasGuidCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressFiasGuidCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AddressFiasGuidCodes.dataAreaId}.
   * @param fiasGuidId Key property. See {@link AddressFiasGuidCodes.fiasGuidId}.
   * @returns A request builder for creating requests to retrieve one `AddressFiasGuidCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fiasGuidId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressFiasGuidCodes<T>, T> {
    return new GetByKeyRequestBuilder<AddressFiasGuidCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FiasGuidId: fiasGuidId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressFiasGuidCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressFiasGuidCodes`.
   */
  update(
    entity: AddressFiasGuidCodes<T>
  ): UpdateRequestBuilder<AddressFiasGuidCodes<T>, T> {
    return new UpdateRequestBuilder<AddressFiasGuidCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressFiasGuidCodes`.
   * @param dataAreaId Key property. See {@link AddressFiasGuidCodes.dataAreaId}.
   * @param fiasGuidId Key property. See {@link AddressFiasGuidCodes.fiasGuidId}.
   * @returns A request builder for creating requests that delete an entity of type `AddressFiasGuidCodes`.
   */
  delete(
    dataAreaId: string,
    fiasGuidId: string
  ): DeleteRequestBuilder<AddressFiasGuidCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressFiasGuidCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressFiasGuidCodes` by taking the entity as a parameter.
   */
  delete(
    entity: AddressFiasGuidCodes<T>
  ): DeleteRequestBuilder<AddressFiasGuidCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fiasGuidId?: string
  ): DeleteRequestBuilder<AddressFiasGuidCodes<T>, T> {
    return new DeleteRequestBuilder<AddressFiasGuidCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AddressFiasGuidCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FiasGuidId: fiasGuidId!
          }
    );
  }
}
