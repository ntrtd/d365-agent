/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { WarrantyTransactionSales } from './WarrantyTransactionSales';
import { WarrantySalesAction } from './WarrantySalesAction';

/**
 * Request builder class for operations supported on the {@link WarrantyTransactionSales} entity.
 */
export class WarrantyTransactionSalesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarrantyTransactionSales<T>, T> {
  /**
   * Returns a request builder for querying all `WarrantyTransactionSales` entities.
   * @returns A request builder for creating requests to retrieve all `WarrantyTransactionSales` entities.
   */
  getAll(): GetAllRequestBuilder<WarrantyTransactionSales<T>, T> {
    return new GetAllRequestBuilder<WarrantyTransactionSales<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarrantyTransactionSales` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarrantyTransactionSales`.
   */
  create(
    entity: WarrantyTransactionSales<T>
  ): CreateRequestBuilder<WarrantyTransactionSales<T>, T> {
    return new CreateRequestBuilder<WarrantyTransactionSales<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarrantyTransactionSales` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarrantyTransactionSales.dataAreaId}.
   * @param warrantablePartyNumber Key property. See {@link WarrantyTransactionSales.warrantablePartyNumber}.
   * @param warrantableStore Key property. See {@link WarrantyTransactionSales.warrantableStore}.
   * @param warrantableTerminalId Key property. See {@link WarrantyTransactionSales.warrantableTerminalId}.
   * @param warrantableTransactionId Key property. See {@link WarrantyTransactionSales.warrantableTransactionId}.
   * @param warrantableLineNum Key property. See {@link WarrantyTransactionSales.warrantableLineNum}.
   * @param transactionDateTime Key property. See {@link WarrantyTransactionSales.transactionDateTime}.
   * @param action Key property. See {@link WarrantyTransactionSales.action}.
   * @param warrantyPartyNumber Key property. See {@link WarrantyTransactionSales.warrantyPartyNumber}.
   * @param warrantyStore Key property. See {@link WarrantyTransactionSales.warrantyStore}.
   * @param warrantyTerminalId Key property. See {@link WarrantyTransactionSales.warrantyTerminalId}.
   * @param warrantyTransactionId Key property. See {@link WarrantyTransactionSales.warrantyTransactionId}.
   * @param warrantyLineNum Key property. See {@link WarrantyTransactionSales.warrantyLineNum}.
   * @returns A request builder for creating requests to retrieve one `WarrantyTransactionSales` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    warrantablePartyNumber: DeserializedType<T, 'Edm.String'>,
    warrantableStore: DeserializedType<T, 'Edm.String'>,
    warrantableTerminalId: DeserializedType<T, 'Edm.String'>,
    warrantableTransactionId: DeserializedType<T, 'Edm.String'>,
    warrantableLineNum: DeserializedType<T, 'Edm.Decimal'>,
    transactionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>,
    action: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WarrantySalesAction'
    >,
    warrantyPartyNumber: DeserializedType<T, 'Edm.String'>,
    warrantyStore: DeserializedType<T, 'Edm.String'>,
    warrantyTerminalId: DeserializedType<T, 'Edm.String'>,
    warrantyTransactionId: DeserializedType<T, 'Edm.String'>,
    warrantyLineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<WarrantyTransactionSales<T>, T> {
    return new GetByKeyRequestBuilder<WarrantyTransactionSales<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WarrantablePartyNumber: warrantablePartyNumber,
        WarrantableStore: warrantableStore,
        WarrantableTerminalId: warrantableTerminalId,
        WarrantableTransactionId: warrantableTransactionId,
        WarrantableLineNum: warrantableLineNum,
        TransactionDateTime: transactionDateTime,
        Action: action,
        WarrantyPartyNumber: warrantyPartyNumber,
        WarrantyStore: warrantyStore,
        WarrantyTerminalId: warrantyTerminalId,
        WarrantyTransactionId: warrantyTransactionId,
        WarrantyLineNum: warrantyLineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarrantyTransactionSales`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarrantyTransactionSales`.
   */
  update(
    entity: WarrantyTransactionSales<T>
  ): UpdateRequestBuilder<WarrantyTransactionSales<T>, T> {
    return new UpdateRequestBuilder<WarrantyTransactionSales<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarrantyTransactionSales`.
   * @param dataAreaId Key property. See {@link WarrantyTransactionSales.dataAreaId}.
   * @param warrantablePartyNumber Key property. See {@link WarrantyTransactionSales.warrantablePartyNumber}.
   * @param warrantableStore Key property. See {@link WarrantyTransactionSales.warrantableStore}.
   * @param warrantableTerminalId Key property. See {@link WarrantyTransactionSales.warrantableTerminalId}.
   * @param warrantableTransactionId Key property. See {@link WarrantyTransactionSales.warrantableTransactionId}.
   * @param warrantableLineNum Key property. See {@link WarrantyTransactionSales.warrantableLineNum}.
   * @param transactionDateTime Key property. See {@link WarrantyTransactionSales.transactionDateTime}.
   * @param action Key property. See {@link WarrantyTransactionSales.action}.
   * @param warrantyPartyNumber Key property. See {@link WarrantyTransactionSales.warrantyPartyNumber}.
   * @param warrantyStore Key property. See {@link WarrantyTransactionSales.warrantyStore}.
   * @param warrantyTerminalId Key property. See {@link WarrantyTransactionSales.warrantyTerminalId}.
   * @param warrantyTransactionId Key property. See {@link WarrantyTransactionSales.warrantyTransactionId}.
   * @param warrantyLineNum Key property. See {@link WarrantyTransactionSales.warrantyLineNum}.
   * @returns A request builder for creating requests that delete an entity of type `WarrantyTransactionSales`.
   */
  delete(
    dataAreaId: string,
    warrantablePartyNumber: string,
    warrantableStore: string,
    warrantableTerminalId: string,
    warrantableTransactionId: string,
    warrantableLineNum: BigNumber,
    transactionDateTime: Moment,
    action: WarrantySalesAction,
    warrantyPartyNumber: string,
    warrantyStore: string,
    warrantyTerminalId: string,
    warrantyTransactionId: string,
    warrantyLineNum: BigNumber
  ): DeleteRequestBuilder<WarrantyTransactionSales<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarrantyTransactionSales`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarrantyTransactionSales` by taking the entity as a parameter.
   */
  delete(
    entity: WarrantyTransactionSales<T>
  ): DeleteRequestBuilder<WarrantyTransactionSales<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    warrantablePartyNumber?: string,
    warrantableStore?: string,
    warrantableTerminalId?: string,
    warrantableTransactionId?: string,
    warrantableLineNum?: BigNumber,
    transactionDateTime?: Moment,
    action?: WarrantySalesAction,
    warrantyPartyNumber?: string,
    warrantyStore?: string,
    warrantyTerminalId?: string,
    warrantyTransactionId?: string,
    warrantyLineNum?: BigNumber
  ): DeleteRequestBuilder<WarrantyTransactionSales<T>, T> {
    return new DeleteRequestBuilder<WarrantyTransactionSales<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarrantyTransactionSales
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WarrantablePartyNumber: warrantablePartyNumber!,
            WarrantableStore: warrantableStore!,
            WarrantableTerminalId: warrantableTerminalId!,
            WarrantableTransactionId: warrantableTransactionId!,
            WarrantableLineNum: warrantableLineNum!,
            TransactionDateTime: transactionDateTime!,
            Action: action!,
            WarrantyPartyNumber: warrantyPartyNumber!,
            WarrantyStore: warrantyStore!,
            WarrantyTerminalId: warrantyTerminalId!,
            WarrantyTransactionId: warrantyTransactionId!,
            WarrantyLineNum: warrantyLineNum!
          }
    );
  }
}
