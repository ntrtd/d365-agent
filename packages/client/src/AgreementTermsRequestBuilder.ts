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
import { AgreementTerms } from './AgreementTerms';

/**
 * Request builder class for operations supported on the {@link AgreementTerms} entity.
 */
export class AgreementTermsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AgreementTerms<T>, T> {
  /**
   * Returns a request builder for querying all `AgreementTerms` entities.
   * @returns A request builder for creating requests to retrieve all `AgreementTerms` entities.
   */
  getAll(): GetAllRequestBuilder<AgreementTerms<T>, T> {
    return new GetAllRequestBuilder<AgreementTerms<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AgreementTerms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AgreementTerms`.
   */
  create(
    entity: AgreementTerms<T>
  ): CreateRequestBuilder<AgreementTerms<T>, T> {
    return new CreateRequestBuilder<AgreementTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AgreementTerms` entity based on its keys.
   * @param termsOfEmployment Key property. See {@link AgreementTerms.termsOfEmployment}.
   * @returns A request builder for creating requests to retrieve one `AgreementTerms` entity based on its keys.
   */
  getByKey(
    termsOfEmployment: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AgreementTerms<T>, T> {
    return new GetByKeyRequestBuilder<AgreementTerms<T>, T>(this.entityApi, {
      TermsOfEmployment: termsOfEmployment
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AgreementTerms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AgreementTerms`.
   */
  update(
    entity: AgreementTerms<T>
  ): UpdateRequestBuilder<AgreementTerms<T>, T> {
    return new UpdateRequestBuilder<AgreementTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AgreementTerms`.
   * @param termsOfEmployment Key property. See {@link AgreementTerms.termsOfEmployment}.
   * @returns A request builder for creating requests that delete an entity of type `AgreementTerms`.
   */
  delete(termsOfEmployment: string): DeleteRequestBuilder<AgreementTerms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AgreementTerms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AgreementTerms` by taking the entity as a parameter.
   */
  delete(entity: AgreementTerms<T>): DeleteRequestBuilder<AgreementTerms<T>, T>;
  delete(
    termsOfEmploymentOrEntity: any
  ): DeleteRequestBuilder<AgreementTerms<T>, T> {
    return new DeleteRequestBuilder<AgreementTerms<T>, T>(
      this.entityApi,
      termsOfEmploymentOrEntity instanceof AgreementTerms
        ? termsOfEmploymentOrEntity
        : { TermsOfEmployment: termsOfEmploymentOrEntity! }
    );
  }
}
