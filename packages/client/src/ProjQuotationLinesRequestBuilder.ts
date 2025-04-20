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
import { ProjQuotationLines } from './ProjQuotationLines';

/**
 * Request builder class for operations supported on the {@link ProjQuotationLines} entity.
 */
export class ProjQuotationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjQuotationLines<T>, T> {
  /**
   * Returns a request builder for querying all `ProjQuotationLines` entities.
   * @returns A request builder for creating requests to retrieve all `ProjQuotationLines` entities.
   */
  getAll(): GetAllRequestBuilder<ProjQuotationLines<T>, T> {
    return new GetAllRequestBuilder<ProjQuotationLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjQuotationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjQuotationLines`.
   */
  create(
    entity: ProjQuotationLines<T>
  ): CreateRequestBuilder<ProjQuotationLines<T>, T> {
    return new CreateRequestBuilder<ProjQuotationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjQuotationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjQuotationLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link ProjQuotationLines.inventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `ProjQuotationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjQuotationLines<T>, T> {
    return new GetByKeyRequestBuilder<ProjQuotationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventoryLotId: inventoryLotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjQuotationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjQuotationLines`.
   */
  update(
    entity: ProjQuotationLines<T>
  ): UpdateRequestBuilder<ProjQuotationLines<T>, T> {
    return new UpdateRequestBuilder<ProjQuotationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjQuotationLines`.
   * @param dataAreaId Key property. See {@link ProjQuotationLines.dataAreaId}.
   * @param inventoryLotId Key property. See {@link ProjQuotationLines.inventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjQuotationLines`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string
  ): DeleteRequestBuilder<ProjQuotationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjQuotationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjQuotationLines` by taking the entity as a parameter.
   */
  delete(
    entity: ProjQuotationLines<T>
  ): DeleteRequestBuilder<ProjQuotationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string
  ): DeleteRequestBuilder<ProjQuotationLines<T>, T> {
    return new DeleteRequestBuilder<ProjQuotationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjQuotationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!
          }
    );
  }
}
