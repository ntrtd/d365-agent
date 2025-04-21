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
import { RetailLoyaltyEarnSchemeLines } from './RetailLoyaltyEarnSchemeLines';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyEarnSchemeLines} entity.
 */
export class RetailLoyaltyEarnSchemeLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyEarnSchemeLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyEarnSchemeLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyEarnSchemeLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyEarnSchemeLines`.
   */
  create(
    entity: RetailLoyaltyEarnSchemeLines<T>
  ): CreateRequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyEarnSchemeLines` entity based on its keys.
   * @param loyaltySchemeId Key property. See {@link RetailLoyaltyEarnSchemeLines.loyaltySchemeId}.
   * @param lineNumber Key property. See {@link RetailLoyaltyEarnSchemeLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyEarnSchemeLines` entity based on its keys.
   */
  getByKey(
    loyaltySchemeId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T>(
      this.entityApi,
      {
        LoyaltySchemeId: loyaltySchemeId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyEarnSchemeLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyEarnSchemeLines`.
   */
  update(
    entity: RetailLoyaltyEarnSchemeLines<T>
  ): UpdateRequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyEarnSchemeLines`.
   * @param loyaltySchemeId Key property. See {@link RetailLoyaltyEarnSchemeLines.loyaltySchemeId}.
   * @param lineNumber Key property. See {@link RetailLoyaltyEarnSchemeLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyEarnSchemeLines`.
   */
  delete(
    loyaltySchemeId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyEarnSchemeLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyEarnSchemeLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyEarnSchemeLines<T>
  ): DeleteRequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T>;
  delete(
    loyaltySchemeIdOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltyEarnSchemeLines<T>, T>(
      this.entityApi,
      loyaltySchemeIdOrEntity instanceof RetailLoyaltyEarnSchemeLines
        ? loyaltySchemeIdOrEntity
        : {
            LoyaltySchemeId: loyaltySchemeIdOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}
