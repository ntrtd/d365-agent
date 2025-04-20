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
import { RetailStoreTenderTypeTable } from './RetailStoreTenderTypeTable';

/**
 * Request builder class for operations supported on the {@link RetailStoreTenderTypeTable} entity.
 */
export class RetailStoreTenderTypeTableRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreTenderTypeTable<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreTenderTypeTable` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreTenderTypeTable` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreTenderTypeTable<T>, T> {
    return new GetAllRequestBuilder<RetailStoreTenderTypeTable<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoreTenderTypeTable` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreTenderTypeTable`.
   */
  create(
    entity: RetailStoreTenderTypeTable<T>
  ): CreateRequestBuilder<RetailStoreTenderTypeTable<T>, T> {
    return new CreateRequestBuilder<RetailStoreTenderTypeTable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreTenderTypeTable` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStoreTenderTypeTable.dataAreaId}.
   * @param omOperatingUnitPartyNumber Key property. See {@link RetailStoreTenderTypeTable.omOperatingUnitPartyNumber}.
   * @param tenderTypeId Key property. See {@link RetailStoreTenderTypeTable.tenderTypeId}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreTenderTypeTable` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>,
    tenderTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoreTenderTypeTable<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreTenderTypeTable<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OMOperatingUnit_PartyNumber: omOperatingUnitPartyNumber,
        TenderTypeId: tenderTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreTenderTypeTable`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreTenderTypeTable`.
   */
  update(
    entity: RetailStoreTenderTypeTable<T>
  ): UpdateRequestBuilder<RetailStoreTenderTypeTable<T>, T> {
    return new UpdateRequestBuilder<RetailStoreTenderTypeTable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreTenderTypeTable`.
   * @param dataAreaId Key property. See {@link RetailStoreTenderTypeTable.dataAreaId}.
   * @param omOperatingUnitPartyNumber Key property. See {@link RetailStoreTenderTypeTable.omOperatingUnitPartyNumber}.
   * @param tenderTypeId Key property. See {@link RetailStoreTenderTypeTable.tenderTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreTenderTypeTable`.
   */
  delete(
    dataAreaId: string,
    omOperatingUnitPartyNumber: string,
    tenderTypeId: string
  ): DeleteRequestBuilder<RetailStoreTenderTypeTable<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreTenderTypeTable`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreTenderTypeTable` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreTenderTypeTable<T>
  ): DeleteRequestBuilder<RetailStoreTenderTypeTable<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    omOperatingUnitPartyNumber?: string,
    tenderTypeId?: string
  ): DeleteRequestBuilder<RetailStoreTenderTypeTable<T>, T> {
    return new DeleteRequestBuilder<RetailStoreTenderTypeTable<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStoreTenderTypeTable
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OMOperatingUnit_PartyNumber: omOperatingUnitPartyNumber!,
            TenderTypeId: tenderTypeId!
          }
    );
  }
}
