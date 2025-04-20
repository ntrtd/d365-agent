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
import { SalesQuotationLines } from './SalesQuotationLines';

/**
 * Request builder class for operations supported on the {@link SalesQuotationLines} entity.
 */
export class SalesQuotationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesQuotationLines<T>, T> {
  /**
   * Returns a request builder for querying all `SalesQuotationLines` entities.
   * @returns A request builder for creating requests to retrieve all `SalesQuotationLines` entities.
   */
  getAll(): GetAllRequestBuilder<SalesQuotationLines<T>, T> {
    return new GetAllRequestBuilder<SalesQuotationLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesQuotationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesQuotationLines`.
   */
  create(
    entity: SalesQuotationLines<T>
  ): CreateRequestBuilder<SalesQuotationLines<T>, T> {
    return new CreateRequestBuilder<SalesQuotationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesQuotationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesQuotationLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link SalesQuotationLines.inventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `SalesQuotationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesQuotationLines<T>, T> {
    return new GetByKeyRequestBuilder<SalesQuotationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventoryLotId: inventoryLotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesQuotationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesQuotationLines`.
   */
  update(
    entity: SalesQuotationLines<T>
  ): UpdateRequestBuilder<SalesQuotationLines<T>, T> {
    return new UpdateRequestBuilder<SalesQuotationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesQuotationLines`.
   * @param dataAreaId Key property. See {@link SalesQuotationLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link SalesQuotationLines.inventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesQuotationLines`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string
  ): DeleteRequestBuilder<SalesQuotationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesQuotationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesQuotationLines` by taking the entity as a parameter.
   */
  delete(
    entity: SalesQuotationLines<T>
  ): DeleteRequestBuilder<SalesQuotationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string
  ): DeleteRequestBuilder<SalesQuotationLines<T>, T> {
    return new DeleteRequestBuilder<SalesQuotationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesQuotationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!
          }
    );
  }
}
