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
import { OpeningSheets } from './OpeningSheets';

/**
 * Request builder class for operations supported on the {@link OpeningSheets} entity.
 */
export class OpeningSheetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpeningSheets<T>, T> {
  /**
   * Returns a request builder for querying all `OpeningSheets` entities.
   * @returns A request builder for creating requests to retrieve all `OpeningSheets` entities.
   */
  getAll(): GetAllRequestBuilder<OpeningSheets<T>, T> {
    return new GetAllRequestBuilder<OpeningSheets<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OpeningSheets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpeningSheets`.
   */
  create(entity: OpeningSheets<T>): CreateRequestBuilder<OpeningSheets<T>, T> {
    return new CreateRequestBuilder<OpeningSheets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OpeningSheets` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpeningSheets.dataAreaId}.
   * @param sheet Key property. See {@link OpeningSheets.sheet}.
   * @param ledgerOpeningTableMainAccountIdDisplayValue Key property. See {@link OpeningSheets.ledgerOpeningTableMainAccountIdDisplayValue}.
   * @param ledgerOpeningTableChartOfAccountsName Key property. See {@link OpeningSheets.ledgerOpeningTableChartOfAccountsName}.
   * @param lineNum Key property. See {@link OpeningSheets.lineNum}.
   * @returns A request builder for creating requests to retrieve one `OpeningSheets` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sheet: DeserializedType<T, 'Edm.String'>,
    ledgerOpeningTableMainAccountIdDisplayValue: DeserializedType<
      T,
      'Edm.String'
    >,
    ledgerOpeningTableChartOfAccountsName: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<OpeningSheets<T>, T> {
    return new GetByKeyRequestBuilder<OpeningSheets<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Sheet: sheet,
      LedgerOpeningTableMainAccountIdDisplayValue:
        ledgerOpeningTableMainAccountIdDisplayValue,
      LedgerOpeningTableChartOfAccountsName:
        ledgerOpeningTableChartOfAccountsName,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OpeningSheets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpeningSheets`.
   */
  update(entity: OpeningSheets<T>): UpdateRequestBuilder<OpeningSheets<T>, T> {
    return new UpdateRequestBuilder<OpeningSheets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OpeningSheets`.
   * @param dataAreaId Key property. See {@link OpeningSheets.dataAreaId}.
   * @param sheet Key property. See {@link OpeningSheets.sheet}.
   * @param ledgerOpeningTableMainAccountIdDisplayValue Key property. See {@link OpeningSheets.ledgerOpeningTableMainAccountIdDisplayValue}.
   * @param ledgerOpeningTableChartOfAccountsName Key property. See {@link OpeningSheets.ledgerOpeningTableChartOfAccountsName}.
   * @param lineNum Key property. See {@link OpeningSheets.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `OpeningSheets`.
   */
  delete(
    dataAreaId: string,
    sheet: string,
    ledgerOpeningTableMainAccountIdDisplayValue: string,
    ledgerOpeningTableChartOfAccountsName: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<OpeningSheets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpeningSheets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpeningSheets` by taking the entity as a parameter.
   */
  delete(entity: OpeningSheets<T>): DeleteRequestBuilder<OpeningSheets<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sheet?: string,
    ledgerOpeningTableMainAccountIdDisplayValue?: string,
    ledgerOpeningTableChartOfAccountsName?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<OpeningSheets<T>, T> {
    return new DeleteRequestBuilder<OpeningSheets<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpeningSheets
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Sheet: sheet!,
            LedgerOpeningTableMainAccountIdDisplayValue:
              ledgerOpeningTableMainAccountIdDisplayValue!,
            LedgerOpeningTableChartOfAccountsName:
              ledgerOpeningTableChartOfAccountsName!,
            LineNum: lineNum!
          }
    );
  }
}
