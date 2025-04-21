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
import { DiscountClaimDistributionDiscountLines } from './DiscountClaimDistributionDiscountLines';

/**
 * Request builder class for operations supported on the {@link DiscountClaimDistributionDiscountLines} entity.
 */
export class DiscountClaimDistributionDiscountLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountClaimDistributionDiscountLines<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountClaimDistributionDiscountLines` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountClaimDistributionDiscountLines` entities.
   */
  getAll(): GetAllRequestBuilder<DiscountClaimDistributionDiscountLines<T>, T> {
    return new GetAllRequestBuilder<
      DiscountClaimDistributionDiscountLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscountClaimDistributionDiscountLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountClaimDistributionDiscountLines`.
   */
  create(
    entity: DiscountClaimDistributionDiscountLines<T>
  ): CreateRequestBuilder<DiscountClaimDistributionDiscountLines<T>, T> {
    return new CreateRequestBuilder<
      DiscountClaimDistributionDiscountLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DiscountClaimDistributionDiscountLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountClaimDistributionDiscountLines.dataAreaId}.
   * @param offerId Key property. See {@link DiscountClaimDistributionDiscountLines.offerId}.
   * @param lineNum Key property. See {@link DiscountClaimDistributionDiscountLines.lineNum}.
   * @param postingProfile Key property. See {@link DiscountClaimDistributionDiscountLines.postingProfile}.
   * @returns A request builder for creating requests to retrieve one `DiscountClaimDistributionDiscountLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    postingProfile: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscountClaimDistributionDiscountLines<T>, T> {
    return new GetByKeyRequestBuilder<
      DiscountClaimDistributionDiscountLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OfferId: offerId,
      LineNum: lineNum,
      PostingProfile: postingProfile
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountClaimDistributionDiscountLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountClaimDistributionDiscountLines`.
   */
  update(
    entity: DiscountClaimDistributionDiscountLines<T>
  ): UpdateRequestBuilder<DiscountClaimDistributionDiscountLines<T>, T> {
    return new UpdateRequestBuilder<
      DiscountClaimDistributionDiscountLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountClaimDistributionDiscountLines`.
   * @param dataAreaId Key property. See {@link DiscountClaimDistributionDiscountLines.dataAreaId}.
   * @param offerId Key property. See {@link DiscountClaimDistributionDiscountLines.offerId}.
   * @param lineNum Key property. See {@link DiscountClaimDistributionDiscountLines.lineNum}.
   * @param postingProfile Key property. See {@link DiscountClaimDistributionDiscountLines.postingProfile}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountClaimDistributionDiscountLines`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    lineNum: BigNumber,
    postingProfile: string
  ): DeleteRequestBuilder<DiscountClaimDistributionDiscountLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountClaimDistributionDiscountLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountClaimDistributionDiscountLines` by taking the entity as a parameter.
   */
  delete(
    entity: DiscountClaimDistributionDiscountLines<T>
  ): DeleteRequestBuilder<DiscountClaimDistributionDiscountLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    lineNum?: BigNumber,
    postingProfile?: string
  ): DeleteRequestBuilder<DiscountClaimDistributionDiscountLines<T>, T> {
    return new DeleteRequestBuilder<
      DiscountClaimDistributionDiscountLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiscountClaimDistributionDiscountLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            LineNum: lineNum!,
            PostingProfile: postingProfile!
          }
    );
  }
}
