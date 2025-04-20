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
import { TemporaryCreditLimits } from './TemporaryCreditLimits';

/**
 * Request builder class for operations supported on the {@link TemporaryCreditLimits} entity.
 */
export class TemporaryCreditLimitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TemporaryCreditLimits<T>, T> {
  /**
   * Returns a request builder for querying all `TemporaryCreditLimits` entities.
   * @returns A request builder for creating requests to retrieve all `TemporaryCreditLimits` entities.
   */
  getAll(): GetAllRequestBuilder<TemporaryCreditLimits<T>, T> {
    return new GetAllRequestBuilder<TemporaryCreditLimits<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TemporaryCreditLimits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TemporaryCreditLimits`.
   */
  create(
    entity: TemporaryCreditLimits<T>
  ): CreateRequestBuilder<TemporaryCreditLimits<T>, T> {
    return new CreateRequestBuilder<TemporaryCreditLimits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TemporaryCreditLimits` entity based on its keys.
   * @param custAccount Key property. See {@link TemporaryCreditLimits.custAccount}.
   * @param custAccountDataArea Key property. See {@link TemporaryCreditLimits.custAccountDataArea}.
   * @param creditLimitId Key property. See {@link TemporaryCreditLimits.creditLimitId}.
   * @param fromDate Key property. See {@link TemporaryCreditLimits.fromDate}.
   * @param toDate Key property. See {@link TemporaryCreditLimits.toDate}.
   * @returns A request builder for creating requests to retrieve one `TemporaryCreditLimits` entity based on its keys.
   */
  getByKey(
    custAccount: DeserializedType<T, 'Edm.String'>,
    custAccountDataArea: DeserializedType<T, 'Edm.String'>,
    creditLimitId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<TemporaryCreditLimits<T>, T> {
    return new GetByKeyRequestBuilder<TemporaryCreditLimits<T>, T>(
      this.entityApi,
      {
        CustAccount: custAccount,
        CustAccountDataArea: custAccountDataArea,
        CreditLimitId: creditLimitId,
        FromDate: fromDate,
        ToDate: toDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TemporaryCreditLimits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TemporaryCreditLimits`.
   */
  update(
    entity: TemporaryCreditLimits<T>
  ): UpdateRequestBuilder<TemporaryCreditLimits<T>, T> {
    return new UpdateRequestBuilder<TemporaryCreditLimits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TemporaryCreditLimits`.
   * @param custAccount Key property. See {@link TemporaryCreditLimits.custAccount}.
   * @param custAccountDataArea Key property. See {@link TemporaryCreditLimits.custAccountDataArea}.
   * @param creditLimitId Key property. See {@link TemporaryCreditLimits.creditLimitId}.
   * @param fromDate Key property. See {@link TemporaryCreditLimits.fromDate}.
   * @param toDate Key property. See {@link TemporaryCreditLimits.toDate}.
   * @returns A request builder for creating requests that delete an entity of type `TemporaryCreditLimits`.
   */
  delete(
    custAccount: string,
    custAccountDataArea: string,
    creditLimitId: string,
    fromDate: Moment,
    toDate: Moment
  ): DeleteRequestBuilder<TemporaryCreditLimits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TemporaryCreditLimits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TemporaryCreditLimits` by taking the entity as a parameter.
   */
  delete(
    entity: TemporaryCreditLimits<T>
  ): DeleteRequestBuilder<TemporaryCreditLimits<T>, T>;
  delete(
    custAccountOrEntity: any,
    custAccountDataArea?: string,
    creditLimitId?: string,
    fromDate?: Moment,
    toDate?: Moment
  ): DeleteRequestBuilder<TemporaryCreditLimits<T>, T> {
    return new DeleteRequestBuilder<TemporaryCreditLimits<T>, T>(
      this.entityApi,
      custAccountOrEntity instanceof TemporaryCreditLimits
        ? custAccountOrEntity
        : {
            CustAccount: custAccountOrEntity!,
            CustAccountDataArea: custAccountDataArea!,
            CreditLimitId: creditLimitId!,
            FromDate: fromDate!,
            ToDate: toDate!
          }
    );
  }
}
