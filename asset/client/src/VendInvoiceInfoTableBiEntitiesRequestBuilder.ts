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
import { VendInvoiceInfoTableBiEntities } from './VendInvoiceInfoTableBiEntities';

/**
 * Request builder class for operations supported on the {@link VendInvoiceInfoTableBiEntities} entity.
 */
export class VendInvoiceInfoTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceInfoTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceInfoTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceInfoTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceInfoTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceInfoTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceInfoTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceInfoTableBiEntities`.
   */
  create(
    entity: VendInvoiceInfoTableBiEntities<T>
  ): CreateRequestBuilder<VendInvoiceInfoTableBiEntities<T>, T> {
    return new CreateRequestBuilder<VendInvoiceInfoTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceInfoTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceInfoTableBiEntities.dataAreaId}.
   * @param tableRefId Key property. See {@link VendInvoiceInfoTableBiEntities.tableRefId}.
   * @param parmId Key property. See {@link VendInvoiceInfoTableBiEntities.parmId}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceInfoTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tableRefId: DeserializedType<T, 'Edm.String'>,
    parmId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendInvoiceInfoTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceInfoTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TableRefId: tableRefId,
        ParmId: parmId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceInfoTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceInfoTableBiEntities`.
   */
  update(
    entity: VendInvoiceInfoTableBiEntities<T>
  ): UpdateRequestBuilder<VendInvoiceInfoTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceInfoTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceInfoTableBiEntities`.
   * @param dataAreaId Key property. See {@link VendInvoiceInfoTableBiEntities.dataAreaId}.
   * @param tableRefId Key property. See {@link VendInvoiceInfoTableBiEntities.tableRefId}.
   * @param parmId Key property. See {@link VendInvoiceInfoTableBiEntities.parmId}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceInfoTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    tableRefId: string,
    parmId: string
  ): DeleteRequestBuilder<VendInvoiceInfoTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceInfoTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceInfoTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceInfoTableBiEntities<T>
  ): DeleteRequestBuilder<VendInvoiceInfoTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tableRefId?: string,
    parmId?: string
  ): DeleteRequestBuilder<VendInvoiceInfoTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceInfoTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceInfoTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TableRefId: tableRefId!,
            ParmId: parmId!
          }
    );
  }
}
