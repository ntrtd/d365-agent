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
import { BarcodeSetups } from './BarcodeSetups';

/**
 * Request builder class for operations supported on the {@link BarcodeSetups} entity.
 */
export class BarcodeSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BarcodeSetups<T>, T> {
  /**
   * Returns a request builder for querying all `BarcodeSetups` entities.
   * @returns A request builder for creating requests to retrieve all `BarcodeSetups` entities.
   */
  getAll(): GetAllRequestBuilder<BarcodeSetups<T>, T> {
    return new GetAllRequestBuilder<BarcodeSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BarcodeSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BarcodeSetups`.
   */
  create(entity: BarcodeSetups<T>): CreateRequestBuilder<BarcodeSetups<T>, T> {
    return new CreateRequestBuilder<BarcodeSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BarcodeSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link BarcodeSetups.dataAreaId}.
   * @param barcodeSetupId Key property. See {@link BarcodeSetups.barcodeSetupId}.
   * @returns A request builder for creating requests to retrieve one `BarcodeSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    barcodeSetupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BarcodeSetups<T>, T> {
    return new GetByKeyRequestBuilder<BarcodeSetups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BarcodeSetupId: barcodeSetupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BarcodeSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BarcodeSetups`.
   */
  update(entity: BarcodeSetups<T>): UpdateRequestBuilder<BarcodeSetups<T>, T> {
    return new UpdateRequestBuilder<BarcodeSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BarcodeSetups`.
   * @param dataAreaId Key property. See {@link BarcodeSetups.dataAreaId}.
   * @param barcodeSetupId Key property. See {@link BarcodeSetups.barcodeSetupId}.
   * @returns A request builder for creating requests that delete an entity of type `BarcodeSetups`.
   */
  delete(
    dataAreaId: string,
    barcodeSetupId: string
  ): DeleteRequestBuilder<BarcodeSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BarcodeSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BarcodeSetups` by taking the entity as a parameter.
   */
  delete(entity: BarcodeSetups<T>): DeleteRequestBuilder<BarcodeSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    barcodeSetupId?: string
  ): DeleteRequestBuilder<BarcodeSetups<T>, T> {
    return new DeleteRequestBuilder<BarcodeSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BarcodeSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BarcodeSetupId: barcodeSetupId!
          }
    );
  }
}
