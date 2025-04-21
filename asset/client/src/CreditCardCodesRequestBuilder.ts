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
import { CreditCardCodes } from './CreditCardCodes';

/**
 * Request builder class for operations supported on the {@link CreditCardCodes} entity.
 */
export class CreditCardCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditCardCodes<T>, T> {
  /**
   * Returns a request builder for querying all `CreditCardCodes` entities.
   * @returns A request builder for creating requests to retrieve all `CreditCardCodes` entities.
   */
  getAll(): GetAllRequestBuilder<CreditCardCodes<T>, T> {
    return new GetAllRequestBuilder<CreditCardCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CreditCardCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditCardCodes`.
   */
  create(
    entity: CreditCardCodes<T>
  ): CreateRequestBuilder<CreditCardCodes<T>, T> {
    return new CreateRequestBuilder<CreditCardCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditCardCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditCardCodes.dataAreaId}.
   * @param category Key property. See {@link CreditCardCodes.category}.
   * @param cardType Key property. See {@link CreditCardCodes.cardType}.
   * @returns A request builder for creating requests to retrieve one `CreditCardCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    category: DeserializedType<T, 'Edm.String'>,
    cardType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditCardCodes<T>, T> {
    return new GetByKeyRequestBuilder<CreditCardCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Category: category,
      CardType: cardType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CreditCardCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditCardCodes`.
   */
  update(
    entity: CreditCardCodes<T>
  ): UpdateRequestBuilder<CreditCardCodes<T>, T> {
    return new UpdateRequestBuilder<CreditCardCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditCardCodes`.
   * @param dataAreaId Key property. See {@link CreditCardCodes.dataAreaId}.
   * @param category Key property. See {@link CreditCardCodes.category}.
   * @param cardType Key property. See {@link CreditCardCodes.cardType}.
   * @returns A request builder for creating requests that delete an entity of type `CreditCardCodes`.
   */
  delete(
    dataAreaId: string,
    category: string,
    cardType: string
  ): DeleteRequestBuilder<CreditCardCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditCardCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditCardCodes` by taking the entity as a parameter.
   */
  delete(
    entity: CreditCardCodes<T>
  ): DeleteRequestBuilder<CreditCardCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    category?: string,
    cardType?: string
  ): DeleteRequestBuilder<CreditCardCodes<T>, T> {
    return new DeleteRequestBuilder<CreditCardCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditCardCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Category: category!,
            CardType: cardType!
          }
    );
  }
}
