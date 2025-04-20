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
import { DeliveryTerms } from './DeliveryTerms';

/**
 * Request builder class for operations supported on the {@link DeliveryTerms} entity.
 */
export class DeliveryTermsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeliveryTerms<T>, T> {
  /**
   * Returns a request builder for querying all `DeliveryTerms` entities.
   * @returns A request builder for creating requests to retrieve all `DeliveryTerms` entities.
   */
  getAll(): GetAllRequestBuilder<DeliveryTerms<T>, T> {
    return new GetAllRequestBuilder<DeliveryTerms<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DeliveryTerms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeliveryTerms`.
   */
  create(entity: DeliveryTerms<T>): CreateRequestBuilder<DeliveryTerms<T>, T> {
    return new CreateRequestBuilder<DeliveryTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DeliveryTerms` entity based on its keys.
   * @param dataAreaId Key property. See {@link DeliveryTerms.dataAreaId}.
   * @param termsCode Key property. See {@link DeliveryTerms.termsCode}.
   * @returns A request builder for creating requests to retrieve one `DeliveryTerms` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    termsCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DeliveryTerms<T>, T> {
    return new GetByKeyRequestBuilder<DeliveryTerms<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TermsCode: termsCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DeliveryTerms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeliveryTerms`.
   */
  update(entity: DeliveryTerms<T>): UpdateRequestBuilder<DeliveryTerms<T>, T> {
    return new UpdateRequestBuilder<DeliveryTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeliveryTerms`.
   * @param dataAreaId Key property. See {@link DeliveryTerms.dataAreaId}.
   * @param termsCode Key property. See {@link DeliveryTerms.termsCode}.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryTerms`.
   */
  delete(
    dataAreaId: string,
    termsCode: string
  ): DeleteRequestBuilder<DeliveryTerms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeliveryTerms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryTerms` by taking the entity as a parameter.
   */
  delete(entity: DeliveryTerms<T>): DeleteRequestBuilder<DeliveryTerms<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    termsCode?: string
  ): DeleteRequestBuilder<DeliveryTerms<T>, T> {
    return new DeleteRequestBuilder<DeliveryTerms<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DeliveryTerms
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TermsCode: termsCode!
          }
    );
  }
}
