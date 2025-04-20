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
import { SalesTradeAgreementAttributeGroupCombinations } from './SalesTradeAgreementAttributeGroupCombinations';

/**
 * Request builder class for operations supported on the {@link SalesTradeAgreementAttributeGroupCombinations} entity.
 */
export class SalesTradeAgreementAttributeGroupCombinationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTradeAgreementAttributeGroupCombinations<T>, T> {
  /**
   * Returns a request builder for querying all `SalesTradeAgreementAttributeGroupCombinations` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTradeAgreementAttributeGroupCombinations` entities.
   */
  getAll(): GetAllRequestBuilder<
    SalesTradeAgreementAttributeGroupCombinations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SalesTradeAgreementAttributeGroupCombinations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesTradeAgreementAttributeGroupCombinations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTradeAgreementAttributeGroupCombinations`.
   */
  create(
    entity: SalesTradeAgreementAttributeGroupCombinations<T>
  ): CreateRequestBuilder<SalesTradeAgreementAttributeGroupCombinations<T>, T> {
    return new CreateRequestBuilder<
      SalesTradeAgreementAttributeGroupCombinations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesTradeAgreementAttributeGroupCombinations` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesTradeAgreementAttributeGroupCombinations.dataAreaId}.
   * @param priceAttributeGroupCombinationName Key property. See {@link SalesTradeAgreementAttributeGroupCombinations.priceAttributeGroupCombinationName}.
   * @returns A request builder for creating requests to retrieve one `SalesTradeAgreementAttributeGroupCombinations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    priceAttributeGroupCombinationName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    SalesTradeAgreementAttributeGroupCombinations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      SalesTradeAgreementAttributeGroupCombinations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      PriceAttributeGroupCombinationName: priceAttributeGroupCombinationName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTradeAgreementAttributeGroupCombinations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTradeAgreementAttributeGroupCombinations`.
   */
  update(
    entity: SalesTradeAgreementAttributeGroupCombinations<T>
  ): UpdateRequestBuilder<SalesTradeAgreementAttributeGroupCombinations<T>, T> {
    return new UpdateRequestBuilder<
      SalesTradeAgreementAttributeGroupCombinations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTradeAgreementAttributeGroupCombinations`.
   * @param dataAreaId Key property. See {@link SalesTradeAgreementAttributeGroupCombinations.dataAreaId}.
   * @param priceAttributeGroupCombinationName Key property. See {@link SalesTradeAgreementAttributeGroupCombinations.priceAttributeGroupCombinationName}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTradeAgreementAttributeGroupCombinations`.
   */
  delete(
    dataAreaId: string,
    priceAttributeGroupCombinationName: string
  ): DeleteRequestBuilder<SalesTradeAgreementAttributeGroupCombinations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTradeAgreementAttributeGroupCombinations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTradeAgreementAttributeGroupCombinations` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTradeAgreementAttributeGroupCombinations<T>
  ): DeleteRequestBuilder<SalesTradeAgreementAttributeGroupCombinations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    priceAttributeGroupCombinationName?: string
  ): DeleteRequestBuilder<SalesTradeAgreementAttributeGroupCombinations<T>, T> {
    return new DeleteRequestBuilder<
      SalesTradeAgreementAttributeGroupCombinations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      SalesTradeAgreementAttributeGroupCombinations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PriceAttributeGroupCombinationName:
              priceAttributeGroupCombinationName!
          }
    );
  }
}
