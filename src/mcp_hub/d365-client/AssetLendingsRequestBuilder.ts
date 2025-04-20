/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { AssetLendings } from './AssetLendings';

/**
 * Request builder class for operations supported on the {@link AssetLendings} entity.
 */
export class AssetLendingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLendings<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLendings` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLendings` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLendings<T>, T> {
    return new GetAllRequestBuilder<AssetLendings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLendings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLendings`.
   */
  create(entity: AssetLendings<T>): CreateRequestBuilder<AssetLendings<T>, T> {
    return new CreateRequestBuilder<AssetLendings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLendings` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLendings.dataAreaId}.
   * @param faInventoryNumber Key property. See {@link AssetLendings.faInventoryNumber}.
   * @param dateOfLease Key property. See {@link AssetLendings.dateOfLease}.
   * @returns A request builder for creating requests to retrieve one `AssetLendings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faInventoryNumber: DeserializedType<T, 'Edm.String'>,
    dateOfLease: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AssetLendings<T>, T> {
    return new GetByKeyRequestBuilder<AssetLendings<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FAInventoryNumber: faInventoryNumber,
      DateOfLease: dateOfLease
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLendings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLendings`.
   */
  update(entity: AssetLendings<T>): UpdateRequestBuilder<AssetLendings<T>, T> {
    return new UpdateRequestBuilder<AssetLendings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLendings`.
   * @param dataAreaId Key property. See {@link AssetLendings.dataAreaId}.
   * @param faInventoryNumber Key property. See {@link AssetLendings.faInventoryNumber}.
   * @param dateOfLease Key property. See {@link AssetLendings.dateOfLease}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLendings`.
   */
  delete(
    dataAreaId: string,
    faInventoryNumber: string,
    dateOfLease: Moment
  ): DeleteRequestBuilder<AssetLendings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLendings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLendings` by taking the entity as a parameter.
   */
  delete(entity: AssetLendings<T>): DeleteRequestBuilder<AssetLendings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faInventoryNumber?: string,
    dateOfLease?: Moment
  ): DeleteRequestBuilder<AssetLendings<T>, T> {
    return new DeleteRequestBuilder<AssetLendings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLendings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FAInventoryNumber: faInventoryNumber!,
            DateOfLease: dateOfLease!
          }
    );
  }
}
