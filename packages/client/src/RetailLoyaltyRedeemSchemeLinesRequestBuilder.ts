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
import { RetailLoyaltyRedeemSchemeLines } from './RetailLoyaltyRedeemSchemeLines';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyRedeemSchemeLines} entity.
 */
export class RetailLoyaltyRedeemSchemeLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyRedeemSchemeLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyRedeemSchemeLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyRedeemSchemeLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyRedeemSchemeLines`.
   */
  create(
    entity: RetailLoyaltyRedeemSchemeLines<T>
  ): CreateRequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyRedeemSchemeLines` entity based on its keys.
   * @param loyaltySchemeId Key property. See {@link RetailLoyaltyRedeemSchemeLines.loyaltySchemeId}.
   * @param lineNumber Key property. See {@link RetailLoyaltyRedeemSchemeLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyRedeemSchemeLines` entity based on its keys.
   */
  getByKey(
    loyaltySchemeId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T>(
      this.entityApi,
      {
        LoyaltySchemeId: loyaltySchemeId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyRedeemSchemeLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyRedeemSchemeLines`.
   */
  update(
    entity: RetailLoyaltyRedeemSchemeLines<T>
  ): UpdateRequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyRedeemSchemeLines`.
   * @param loyaltySchemeId Key property. See {@link RetailLoyaltyRedeemSchemeLines.loyaltySchemeId}.
   * @param lineNumber Key property. See {@link RetailLoyaltyRedeemSchemeLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyRedeemSchemeLines`.
   */
  delete(
    loyaltySchemeId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyRedeemSchemeLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyRedeemSchemeLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyRedeemSchemeLines<T>
  ): DeleteRequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T>;
  delete(
    loyaltySchemeIdOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltyRedeemSchemeLines<T>, T>(
      this.entityApi,
      loyaltySchemeIdOrEntity instanceof RetailLoyaltyRedeemSchemeLines
        ? loyaltySchemeIdOrEntity
        : {
            LoyaltySchemeId: loyaltySchemeIdOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}
