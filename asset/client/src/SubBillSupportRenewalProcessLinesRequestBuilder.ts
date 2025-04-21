/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { SubBillSupportRenewalProcessLines } from './SubBillSupportRenewalProcessLines';

/**
 * Request builder class for operations supported on the {@link SubBillSupportRenewalProcessLines} entity.
 */
export class SubBillSupportRenewalProcessLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillSupportRenewalProcessLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillSupportRenewalProcessLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillSupportRenewalProcessLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillSupportRenewalProcessLines<T>, T> {
    return new GetAllRequestBuilder<SubBillSupportRenewalProcessLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillSupportRenewalProcessLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillSupportRenewalProcessLines`.
   */
  create(
    entity: SubBillSupportRenewalProcessLines<T>
  ): CreateRequestBuilder<SubBillSupportRenewalProcessLines<T>, T> {
    return new CreateRequestBuilder<SubBillSupportRenewalProcessLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillSupportRenewalProcessLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillSupportRenewalProcessLines.dataAreaId}.
   * @param salesId Key property. See {@link SubBillSupportRenewalProcessLines.salesId}.
   * @param lineNumber Key property. See {@link SubBillSupportRenewalProcessLines.lineNumber}.
   * @param inventoryLotId Key property. See {@link SubBillSupportRenewalProcessLines.inventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `SubBillSupportRenewalProcessLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillSupportRenewalProcessLines<T>, T> {
    return new GetByKeyRequestBuilder<SubBillSupportRenewalProcessLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesId: salesId,
        LineNumber: lineNumber,
        InventoryLotId: inventoryLotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillSupportRenewalProcessLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillSupportRenewalProcessLines`.
   */
  update(
    entity: SubBillSupportRenewalProcessLines<T>
  ): UpdateRequestBuilder<SubBillSupportRenewalProcessLines<T>, T> {
    return new UpdateRequestBuilder<SubBillSupportRenewalProcessLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillSupportRenewalProcessLines`.
   * @param dataAreaId Key property. See {@link SubBillSupportRenewalProcessLines.dataAreaId}.
   * @param salesId Key property. See {@link SubBillSupportRenewalProcessLines.salesId}.
   * @param lineNumber Key property. See {@link SubBillSupportRenewalProcessLines.lineNumber}.
   * @param inventoryLotId Key property. See {@link SubBillSupportRenewalProcessLines.inventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillSupportRenewalProcessLines`.
   */
  delete(
    dataAreaId: string,
    salesId: string,
    lineNumber: BigNumber,
    inventoryLotId: string
  ): DeleteRequestBuilder<SubBillSupportRenewalProcessLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillSupportRenewalProcessLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillSupportRenewalProcessLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillSupportRenewalProcessLines<T>
  ): DeleteRequestBuilder<SubBillSupportRenewalProcessLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string,
    lineNumber?: BigNumber,
    inventoryLotId?: string
  ): DeleteRequestBuilder<SubBillSupportRenewalProcessLines<T>, T> {
    return new DeleteRequestBuilder<SubBillSupportRenewalProcessLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillSupportRenewalProcessLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesId: salesId!,
            LineNumber: lineNumber!,
            InventoryLotId: inventoryLotId!
          }
    );
  }
}
