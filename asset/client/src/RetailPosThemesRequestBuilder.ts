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
import { RetailPosThemes } from './RetailPosThemes';

/**
 * Request builder class for operations supported on the {@link RetailPosThemes} entity.
 */
export class RetailPosThemesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailPosThemes<T>, T> {
  /**
   * Returns a request builder for querying all `RetailPosThemes` entities.
   * @returns A request builder for creating requests to retrieve all `RetailPosThemes` entities.
   */
  getAll(): GetAllRequestBuilder<RetailPosThemes<T>, T> {
    return new GetAllRequestBuilder<RetailPosThemes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailPosThemes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailPosThemes`.
   */
  create(
    entity: RetailPosThemes<T>
  ): CreateRequestBuilder<RetailPosThemes<T>, T> {
    return new CreateRequestBuilder<RetailPosThemes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailPosThemes` entity based on its keys.
   * @param retailDeviceTypesType Key property. See {@link RetailPosThemes.retailDeviceTypesType}.
   * @param name Key property. See {@link RetailPosThemes.name}.
   * @returns A request builder for creating requests to retrieve one `RetailPosThemes` entity based on its keys.
   */
  getByKey(
    retailDeviceTypesType: DeserializedType<T, 'Edm.Int32'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailPosThemes<T>, T> {
    return new GetByKeyRequestBuilder<RetailPosThemes<T>, T>(this.entityApi, {
      RetailDeviceTypes_Type: retailDeviceTypesType,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailPosThemes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailPosThemes`.
   */
  update(
    entity: RetailPosThemes<T>
  ): UpdateRequestBuilder<RetailPosThemes<T>, T> {
    return new UpdateRequestBuilder<RetailPosThemes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailPosThemes`.
   * @param retailDeviceTypesType Key property. See {@link RetailPosThemes.retailDeviceTypesType}.
   * @param name Key property. See {@link RetailPosThemes.name}.
   * @returns A request builder for creating requests that delete an entity of type `RetailPosThemes`.
   */
  delete(
    retailDeviceTypesType: number,
    name: string
  ): DeleteRequestBuilder<RetailPosThemes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailPosThemes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailPosThemes` by taking the entity as a parameter.
   */
  delete(
    entity: RetailPosThemes<T>
  ): DeleteRequestBuilder<RetailPosThemes<T>, T>;
  delete(
    retailDeviceTypesTypeOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<RetailPosThemes<T>, T> {
    return new DeleteRequestBuilder<RetailPosThemes<T>, T>(
      this.entityApi,
      retailDeviceTypesTypeOrEntity instanceof RetailPosThemes
        ? retailDeviceTypesTypeOrEntity
        : {
            RetailDeviceTypes_Type: retailDeviceTypesTypeOrEntity!,
            Name: name!
          }
    );
  }
}
