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
import { GstMinorCodes } from './GstMinorCodes';

/**
 * Request builder class for operations supported on the {@link GstMinorCodes} entity.
 */
export class GstMinorCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GstMinorCodes<T>, T> {
  /**
   * Returns a request builder for querying all `GstMinorCodes` entities.
   * @returns A request builder for creating requests to retrieve all `GstMinorCodes` entities.
   */
  getAll(): GetAllRequestBuilder<GstMinorCodes<T>, T> {
    return new GetAllRequestBuilder<GstMinorCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GstMinorCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GstMinorCodes`.
   */
  create(entity: GstMinorCodes<T>): CreateRequestBuilder<GstMinorCodes<T>, T> {
    return new CreateRequestBuilder<GstMinorCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GstMinorCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link GstMinorCodes.dataAreaId}.
   * @param minorCode Key property. See {@link GstMinorCodes.minorCode}.
   * @param taxComponent Key property. See {@link GstMinorCodes.taxComponent}.
   * @returns A request builder for creating requests to retrieve one `GstMinorCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    minorCode: DeserializedType<T, 'Edm.String'>,
    taxComponent: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GstMinorCodes<T>, T> {
    return new GetByKeyRequestBuilder<GstMinorCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MinorCode: minorCode,
      TaxComponent: taxComponent
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GstMinorCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GstMinorCodes`.
   */
  update(entity: GstMinorCodes<T>): UpdateRequestBuilder<GstMinorCodes<T>, T> {
    return new UpdateRequestBuilder<GstMinorCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GstMinorCodes`.
   * @param dataAreaId Key property. See {@link GstMinorCodes.dataAreaId}.
   * @param minorCode Key property. See {@link GstMinorCodes.minorCode}.
   * @param taxComponent Key property. See {@link GstMinorCodes.taxComponent}.
   * @returns A request builder for creating requests that delete an entity of type `GstMinorCodes`.
   */
  delete(
    dataAreaId: string,
    minorCode: string,
    taxComponent: string
  ): DeleteRequestBuilder<GstMinorCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GstMinorCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GstMinorCodes` by taking the entity as a parameter.
   */
  delete(entity: GstMinorCodes<T>): DeleteRequestBuilder<GstMinorCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    minorCode?: string,
    taxComponent?: string
  ): DeleteRequestBuilder<GstMinorCodes<T>, T> {
    return new DeleteRequestBuilder<GstMinorCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof GstMinorCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MinorCode: minorCode!,
            TaxComponent: taxComponent!
          }
    );
  }
}
