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
import { FundingLimitSpentAmountValidationHistories } from './FundingLimitSpentAmountValidationHistories';

/**
 * Request builder class for operations supported on the {@link FundingLimitSpentAmountValidationHistories} entity.
 */
export class FundingLimitSpentAmountValidationHistoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FundingLimitSpentAmountValidationHistories<T>, T> {
  /**
   * Returns a request builder for querying all `FundingLimitSpentAmountValidationHistories` entities.
   * @returns A request builder for creating requests to retrieve all `FundingLimitSpentAmountValidationHistories` entities.
   */
  getAll(): GetAllRequestBuilder<
    FundingLimitSpentAmountValidationHistories<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FundingLimitSpentAmountValidationHistories<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FundingLimitSpentAmountValidationHistories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FundingLimitSpentAmountValidationHistories`.
   */
  create(
    entity: FundingLimitSpentAmountValidationHistories<T>
  ): CreateRequestBuilder<FundingLimitSpentAmountValidationHistories<T>, T> {
    return new CreateRequestBuilder<
      FundingLimitSpentAmountValidationHistories<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FundingLimitSpentAmountValidationHistories` entity based on its keys.
   * @param dataAreaId Key property. See {@link FundingLimitSpentAmountValidationHistories.dataAreaId}.
   * @param contractId Key property. See {@link FundingLimitSpentAmountValidationHistories.contractId}.
   * @param lineNumber Key property. See {@link FundingLimitSpentAmountValidationHistories.lineNumber}.
   * @param createdOn Key property. See {@link FundingLimitSpentAmountValidationHistories.createdOn}.
   * @returns A request builder for creating requests to retrieve one `FundingLimitSpentAmountValidationHistories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contractId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>,
    createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<FundingLimitSpentAmountValidationHistories<T>, T> {
    return new GetByKeyRequestBuilder<
      FundingLimitSpentAmountValidationHistories<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ContractId: contractId,
      LineNumber: lineNumber,
      CreatedOn: createdOn
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FundingLimitSpentAmountValidationHistories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FundingLimitSpentAmountValidationHistories`.
   */
  update(
    entity: FundingLimitSpentAmountValidationHistories<T>
  ): UpdateRequestBuilder<FundingLimitSpentAmountValidationHistories<T>, T> {
    return new UpdateRequestBuilder<
      FundingLimitSpentAmountValidationHistories<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FundingLimitSpentAmountValidationHistories`.
   * @param dataAreaId Key property. See {@link FundingLimitSpentAmountValidationHistories.dataAreaId}.
   * @param contractId Key property. See {@link FundingLimitSpentAmountValidationHistories.contractId}.
   * @param lineNumber Key property. See {@link FundingLimitSpentAmountValidationHistories.lineNumber}.
   * @param createdOn Key property. See {@link FundingLimitSpentAmountValidationHistories.createdOn}.
   * @returns A request builder for creating requests that delete an entity of type `FundingLimitSpentAmountValidationHistories`.
   */
  delete(
    dataAreaId: string,
    contractId: string,
    lineNumber: BigNumber,
    createdOn: Moment
  ): DeleteRequestBuilder<FundingLimitSpentAmountValidationHistories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FundingLimitSpentAmountValidationHistories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FundingLimitSpentAmountValidationHistories` by taking the entity as a parameter.
   */
  delete(
    entity: FundingLimitSpentAmountValidationHistories<T>
  ): DeleteRequestBuilder<FundingLimitSpentAmountValidationHistories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contractId?: string,
    lineNumber?: BigNumber,
    createdOn?: Moment
  ): DeleteRequestBuilder<FundingLimitSpentAmountValidationHistories<T>, T> {
    return new DeleteRequestBuilder<
      FundingLimitSpentAmountValidationHistories<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof FundingLimitSpentAmountValidationHistories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContractId: contractId!,
            LineNumber: lineNumber!,
            CreatedOn: createdOn!
          }
    );
  }
}
