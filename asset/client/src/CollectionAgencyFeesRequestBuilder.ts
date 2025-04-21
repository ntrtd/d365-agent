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
import { CollectionAgencyFees } from './CollectionAgencyFees';

/**
 * Request builder class for operations supported on the {@link CollectionAgencyFees} entity.
 */
export class CollectionAgencyFeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CollectionAgencyFees<T>, T> {
  /**
   * Returns a request builder for querying all `CollectionAgencyFees` entities.
   * @returns A request builder for creating requests to retrieve all `CollectionAgencyFees` entities.
   */
  getAll(): GetAllRequestBuilder<CollectionAgencyFees<T>, T> {
    return new GetAllRequestBuilder<CollectionAgencyFees<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CollectionAgencyFees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CollectionAgencyFees`.
   */
  create(
    entity: CollectionAgencyFees<T>
  ): CreateRequestBuilder<CollectionAgencyFees<T>, T> {
    return new CreateRequestBuilder<CollectionAgencyFees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CollectionAgencyFees` entity based on its keys.
   * @param currencyCode Key property. See {@link CollectionAgencyFees.currencyCode}.
   * @param validFrom Key property. See {@link CollectionAgencyFees.validFrom}.
   * @param validTo Key property. See {@link CollectionAgencyFees.validTo}.
   * @returns A request builder for creating requests to retrieve one `CollectionAgencyFees` entity based on its keys.
   */
  getByKey(
    currencyCode: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CollectionAgencyFees<T>, T> {
    return new GetByKeyRequestBuilder<CollectionAgencyFees<T>, T>(
      this.entityApi,
      {
        CurrencyCode: currencyCode,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CollectionAgencyFees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CollectionAgencyFees`.
   */
  update(
    entity: CollectionAgencyFees<T>
  ): UpdateRequestBuilder<CollectionAgencyFees<T>, T> {
    return new UpdateRequestBuilder<CollectionAgencyFees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CollectionAgencyFees`.
   * @param currencyCode Key property. See {@link CollectionAgencyFees.currencyCode}.
   * @param validFrom Key property. See {@link CollectionAgencyFees.validFrom}.
   * @param validTo Key property. See {@link CollectionAgencyFees.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `CollectionAgencyFees`.
   */
  delete(
    currencyCode: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<CollectionAgencyFees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CollectionAgencyFees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CollectionAgencyFees` by taking the entity as a parameter.
   */
  delete(
    entity: CollectionAgencyFees<T>
  ): DeleteRequestBuilder<CollectionAgencyFees<T>, T>;
  delete(
    currencyCodeOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<CollectionAgencyFees<T>, T> {
    return new DeleteRequestBuilder<CollectionAgencyFees<T>, T>(
      this.entityApi,
      currencyCodeOrEntity instanceof CollectionAgencyFees
        ? currencyCodeOrEntity
        : {
            CurrencyCode: currencyCodeOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
