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
import { WithholdPeriods } from './WithholdPeriods';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';

/**
 * Request builder class for operations supported on the {@link WithholdPeriods} entity.
 */
export class WithholdPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdPeriods<T>, T> {
    return new GetAllRequestBuilder<WithholdPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdPeriods`.
   */
  create(
    entity: WithholdPeriods<T>
  ): CreateRequestBuilder<WithholdPeriods<T>, T> {
    return new CreateRequestBuilder<WithholdPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdPeriods` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdPeriods.dataAreaId}.
   * @param settlementPeriod Key property. See {@link WithholdPeriods.settlementPeriod}.
   * @param taxType Key property. See {@link WithholdPeriods.taxType}.
   * @param withholdingTaxuthority Key property. See {@link WithholdPeriods.withholdingTaxuthority}.
   * @param fromDate Key property. See {@link WithholdPeriods.fromDate}.
   * @param toDate Key property. See {@link WithholdPeriods.toDate}.
   * @returns A request builder for creating requests to retrieve one `WithholdPeriods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    settlementPeriod: DeserializedType<T, 'Edm.String'>,
    taxType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxWithholdType_IN'
    >,
    withholdingTaxuthority: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WithholdPeriods<T>, T> {
    return new GetByKeyRequestBuilder<WithholdPeriods<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SettlementPeriod: settlementPeriod,
      TaxType: taxType,
      WithholdingTaxuthority: withholdingTaxuthority,
      FromDate: fromDate,
      ToDate: toDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdPeriods`.
   */
  update(
    entity: WithholdPeriods<T>
  ): UpdateRequestBuilder<WithholdPeriods<T>, T> {
    return new UpdateRequestBuilder<WithholdPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdPeriods`.
   * @param dataAreaId Key property. See {@link WithholdPeriods.dataAreaId}.
   * @param settlementPeriod Key property. See {@link WithholdPeriods.settlementPeriod}.
   * @param taxType Key property. See {@link WithholdPeriods.taxType}.
   * @param withholdingTaxuthority Key property. See {@link WithholdPeriods.withholdingTaxuthority}.
   * @param fromDate Key property. See {@link WithholdPeriods.fromDate}.
   * @param toDate Key property. See {@link WithholdPeriods.toDate}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdPeriods`.
   */
  delete(
    dataAreaId: string,
    settlementPeriod: string,
    taxType: TaxWithholdTypeIn,
    withholdingTaxuthority: string,
    fromDate: Moment,
    toDate: Moment
  ): DeleteRequestBuilder<WithholdPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdPeriods<T>
  ): DeleteRequestBuilder<WithholdPeriods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    settlementPeriod?: string,
    taxType?: TaxWithholdTypeIn,
    withholdingTaxuthority?: string,
    fromDate?: Moment,
    toDate?: Moment
  ): DeleteRequestBuilder<WithholdPeriods<T>, T> {
    return new DeleteRequestBuilder<WithholdPeriods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdPeriods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SettlementPeriod: settlementPeriod!,
            TaxType: taxType!,
            WithholdingTaxuthority: withholdingTaxuthority!,
            FromDate: fromDate!,
            ToDate: toDate!
          }
    );
  }
}
