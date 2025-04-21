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
import { RoyaltyAgreementLineAmounts } from './RoyaltyAgreementLineAmounts';

/**
 * Request builder class for operations supported on the {@link RoyaltyAgreementLineAmounts} entity.
 */
export class RoyaltyAgreementLineAmountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RoyaltyAgreementLineAmounts<T>, T> {
  /**
   * Returns a request builder for querying all `RoyaltyAgreementLineAmounts` entities.
   * @returns A request builder for creating requests to retrieve all `RoyaltyAgreementLineAmounts` entities.
   */
  getAll(): GetAllRequestBuilder<RoyaltyAgreementLineAmounts<T>, T> {
    return new GetAllRequestBuilder<RoyaltyAgreementLineAmounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RoyaltyAgreementLineAmounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoyaltyAgreementLineAmounts`.
   */
  create(
    entity: RoyaltyAgreementLineAmounts<T>
  ): CreateRequestBuilder<RoyaltyAgreementLineAmounts<T>, T> {
    return new CreateRequestBuilder<RoyaltyAgreementLineAmounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RoyaltyAgreementLineAmounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementLineAmounts.dataAreaId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementLineAmounts.royaltyAgreementId}.
   * @param royaltyAgreementLineId Key property. See {@link RoyaltyAgreementLineAmounts.royaltyAgreementLineId}.
   * @param lineNumber Key property. See {@link RoyaltyAgreementLineAmounts.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RoyaltyAgreementLineAmounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    royaltyAgreementId: DeserializedType<T, 'Edm.String'>,
    royaltyAgreementLineId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RoyaltyAgreementLineAmounts<T>, T> {
    return new GetByKeyRequestBuilder<RoyaltyAgreementLineAmounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RoyaltyAgreementId: royaltyAgreementId,
        RoyaltyAgreementLineId: royaltyAgreementLineId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RoyaltyAgreementLineAmounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoyaltyAgreementLineAmounts`.
   */
  update(
    entity: RoyaltyAgreementLineAmounts<T>
  ): UpdateRequestBuilder<RoyaltyAgreementLineAmounts<T>, T> {
    return new UpdateRequestBuilder<RoyaltyAgreementLineAmounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementLineAmounts`.
   * @param dataAreaId Key property. See {@link RoyaltyAgreementLineAmounts.dataAreaId}.
   * @param royaltyAgreementId Key property. See {@link RoyaltyAgreementLineAmounts.royaltyAgreementId}.
   * @param royaltyAgreementLineId Key property. See {@link RoyaltyAgreementLineAmounts.royaltyAgreementLineId}.
   * @param lineNumber Key property. See {@link RoyaltyAgreementLineAmounts.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementLineAmounts`.
   */
  delete(
    dataAreaId: string,
    royaltyAgreementId: string,
    royaltyAgreementLineId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RoyaltyAgreementLineAmounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RoyaltyAgreementLineAmounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoyaltyAgreementLineAmounts` by taking the entity as a parameter.
   */
  delete(
    entity: RoyaltyAgreementLineAmounts<T>
  ): DeleteRequestBuilder<RoyaltyAgreementLineAmounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    royaltyAgreementId?: string,
    royaltyAgreementLineId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RoyaltyAgreementLineAmounts<T>, T> {
    return new DeleteRequestBuilder<RoyaltyAgreementLineAmounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RoyaltyAgreementLineAmounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RoyaltyAgreementId: royaltyAgreementId!,
            RoyaltyAgreementLineId: royaltyAgreementLineId!,
            LineNumber: lineNumber!
          }
    );
  }
}
