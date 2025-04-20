/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { RetailTenderTypeCardNumbers } from './RetailTenderTypeCardNumbers';

/**
 * Request builder class for operations supported on the {@link RetailTenderTypeCardNumbers} entity.
 */
export class RetailTenderTypeCardNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTenderTypeCardNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTenderTypeCardNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTenderTypeCardNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTenderTypeCardNumbers<T>, T> {
    return new GetAllRequestBuilder<RetailTenderTypeCardNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTenderTypeCardNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTenderTypeCardNumbers`.
   */
  create(
    entity: RetailTenderTypeCardNumbers<T>
  ): CreateRequestBuilder<RetailTenderTypeCardNumbers<T>, T> {
    return new CreateRequestBuilder<RetailTenderTypeCardNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTenderTypeCardNumbers` entity based on its keys.
   * @param cardTypeId Key property. See {@link RetailTenderTypeCardNumbers.cardTypeId}.
   * @param cardNumberFrom Key property. See {@link RetailTenderTypeCardNumbers.cardNumberFrom}.
   * @param cardNumberTo Key property. See {@link RetailTenderTypeCardNumbers.cardNumberTo}.
   * @param cardNumberLength Key property. See {@link RetailTenderTypeCardNumbers.cardNumberLength}.
   * @returns A request builder for creating requests to retrieve one `RetailTenderTypeCardNumbers` entity based on its keys.
   */
  getByKey(
    cardTypeId: DeserializedType<T, 'Edm.String'>,
    cardNumberFrom: DeserializedType<T, 'Edm.String'>,
    cardNumberTo: DeserializedType<T, 'Edm.String'>,
    cardNumberLength: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailTenderTypeCardNumbers<T>, T> {
    return new GetByKeyRequestBuilder<RetailTenderTypeCardNumbers<T>, T>(
      this.entityApi,
      {
        CardTypeId: cardTypeId,
        CardNumberFrom: cardNumberFrom,
        CardNumberTo: cardNumberTo,
        CardNumberLength: cardNumberLength
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTenderTypeCardNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTenderTypeCardNumbers`.
   */
  update(
    entity: RetailTenderTypeCardNumbers<T>
  ): UpdateRequestBuilder<RetailTenderTypeCardNumbers<T>, T> {
    return new UpdateRequestBuilder<RetailTenderTypeCardNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTenderTypeCardNumbers`.
   * @param cardTypeId Key property. See {@link RetailTenderTypeCardNumbers.cardTypeId}.
   * @param cardNumberFrom Key property. See {@link RetailTenderTypeCardNumbers.cardNumberFrom}.
   * @param cardNumberTo Key property. See {@link RetailTenderTypeCardNumbers.cardNumberTo}.
   * @param cardNumberLength Key property. See {@link RetailTenderTypeCardNumbers.cardNumberLength}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTenderTypeCardNumbers`.
   */
  delete(
    cardTypeId: string,
    cardNumberFrom: string,
    cardNumberTo: string,
    cardNumberLength: number
  ): DeleteRequestBuilder<RetailTenderTypeCardNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTenderTypeCardNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTenderTypeCardNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTenderTypeCardNumbers<T>
  ): DeleteRequestBuilder<RetailTenderTypeCardNumbers<T>, T>;
  delete(
    cardTypeIdOrEntity: any,
    cardNumberFrom?: string,
    cardNumberTo?: string,
    cardNumberLength?: number
  ): DeleteRequestBuilder<RetailTenderTypeCardNumbers<T>, T> {
    return new DeleteRequestBuilder<RetailTenderTypeCardNumbers<T>, T>(
      this.entityApi,
      cardTypeIdOrEntity instanceof RetailTenderTypeCardNumbers
        ? cardTypeIdOrEntity
        : {
            CardTypeId: cardTypeIdOrEntity!,
            CardNumberFrom: cardNumberFrom!,
            CardNumberTo: cardNumberTo!,
            CardNumberLength: cardNumberLength!
          }
    );
  }
}
