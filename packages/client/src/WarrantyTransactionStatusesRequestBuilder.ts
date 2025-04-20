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
import { WarrantyTransactionStatuses } from './WarrantyTransactionStatuses';

/**
 * Request builder class for operations supported on the {@link WarrantyTransactionStatuses} entity.
 */
export class WarrantyTransactionStatusesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarrantyTransactionStatuses<T>, T> {
  /**
   * Returns a request builder for querying all `WarrantyTransactionStatuses` entities.
   * @returns A request builder for creating requests to retrieve all `WarrantyTransactionStatuses` entities.
   */
  getAll(): GetAllRequestBuilder<WarrantyTransactionStatuses<T>, T> {
    return new GetAllRequestBuilder<WarrantyTransactionStatuses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarrantyTransactionStatuses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarrantyTransactionStatuses`.
   */
  create(
    entity: WarrantyTransactionStatuses<T>
  ): CreateRequestBuilder<WarrantyTransactionStatuses<T>, T> {
    return new CreateRequestBuilder<WarrantyTransactionStatuses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarrantyTransactionStatuses` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarrantyTransactionStatuses.dataAreaId}.
   * @param operatingUnitPartyNumber Key property. See {@link WarrantyTransactionStatuses.operatingUnitPartyNumber}.
   * @param warrantyStore Key property. See {@link WarrantyTransactionStatuses.warrantyStore}.
   * @param warrantyTerminalId Key property. See {@link WarrantyTransactionStatuses.warrantyTerminalId}.
   * @param warrantyTransactionId Key property. See {@link WarrantyTransactionStatuses.warrantyTransactionId}.
   * @returns A request builder for creating requests to retrieve one `WarrantyTransactionStatuses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>,
    warrantyStore: DeserializedType<T, 'Edm.String'>,
    warrantyTerminalId: DeserializedType<T, 'Edm.String'>,
    warrantyTransactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarrantyTransactionStatuses<T>, T> {
    return new GetByKeyRequestBuilder<WarrantyTransactionStatuses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OperatingUnitPartyNumber: operatingUnitPartyNumber,
        WarrantyStore: warrantyStore,
        WarrantyTerminalId: warrantyTerminalId,
        WarrantyTransactionId: warrantyTransactionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarrantyTransactionStatuses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarrantyTransactionStatuses`.
   */
  update(
    entity: WarrantyTransactionStatuses<T>
  ): UpdateRequestBuilder<WarrantyTransactionStatuses<T>, T> {
    return new UpdateRequestBuilder<WarrantyTransactionStatuses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarrantyTransactionStatuses`.
   * @param dataAreaId Key property. See {@link WarrantyTransactionStatuses.dataAreaId}.
   * @param operatingUnitPartyNumber Key property. See {@link WarrantyTransactionStatuses.operatingUnitPartyNumber}.
   * @param warrantyStore Key property. See {@link WarrantyTransactionStatuses.warrantyStore}.
   * @param warrantyTerminalId Key property. See {@link WarrantyTransactionStatuses.warrantyTerminalId}.
   * @param warrantyTransactionId Key property. See {@link WarrantyTransactionStatuses.warrantyTransactionId}.
   * @returns A request builder for creating requests that delete an entity of type `WarrantyTransactionStatuses`.
   */
  delete(
    dataAreaId: string,
    operatingUnitPartyNumber: string,
    warrantyStore: string,
    warrantyTerminalId: string,
    warrantyTransactionId: string
  ): DeleteRequestBuilder<WarrantyTransactionStatuses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarrantyTransactionStatuses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarrantyTransactionStatuses` by taking the entity as a parameter.
   */
  delete(
    entity: WarrantyTransactionStatuses<T>
  ): DeleteRequestBuilder<WarrantyTransactionStatuses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitPartyNumber?: string,
    warrantyStore?: string,
    warrantyTerminalId?: string,
    warrantyTransactionId?: string
  ): DeleteRequestBuilder<WarrantyTransactionStatuses<T>, T> {
    return new DeleteRequestBuilder<WarrantyTransactionStatuses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarrantyTransactionStatuses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitPartyNumber: operatingUnitPartyNumber!,
            WarrantyStore: warrantyStore!,
            WarrantyTerminalId: warrantyTerminalId!,
            WarrantyTransactionId: warrantyTransactionId!
          }
    );
  }
}
