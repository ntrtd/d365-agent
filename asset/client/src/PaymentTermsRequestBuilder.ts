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
import { PaymentTerms } from './PaymentTerms';

/**
 * Request builder class for operations supported on the {@link PaymentTerms} entity.
 */
export class PaymentTermsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentTerms<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentTerms` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentTerms` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentTerms<T>, T> {
    return new GetAllRequestBuilder<PaymentTerms<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentTerms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentTerms`.
   */
  create(entity: PaymentTerms<T>): CreateRequestBuilder<PaymentTerms<T>, T> {
    return new CreateRequestBuilder<PaymentTerms<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PaymentTerms` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentTerms.dataAreaId}.
   * @param name Key property. See {@link PaymentTerms.name}.
   * @returns A request builder for creating requests to retrieve one `PaymentTerms` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentTerms<T>, T> {
    return new GetByKeyRequestBuilder<PaymentTerms<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentTerms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentTerms`.
   */
  update(entity: PaymentTerms<T>): UpdateRequestBuilder<PaymentTerms<T>, T> {
    return new UpdateRequestBuilder<PaymentTerms<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentTerms`.
   * @param dataAreaId Key property. See {@link PaymentTerms.dataAreaId}.
   * @param name Key property. See {@link PaymentTerms.name}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentTerms`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<PaymentTerms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentTerms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentTerms` by taking the entity as a parameter.
   */
  delete(entity: PaymentTerms<T>): DeleteRequestBuilder<PaymentTerms<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<PaymentTerms<T>, T> {
    return new DeleteRequestBuilder<PaymentTerms<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentTerms
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
