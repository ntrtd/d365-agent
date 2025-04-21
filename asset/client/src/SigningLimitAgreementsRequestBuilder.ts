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
import { SigningLimitAgreements } from './SigningLimitAgreements';

/**
 * Request builder class for operations supported on the {@link SigningLimitAgreements} entity.
 */
export class SigningLimitAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SigningLimitAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `SigningLimitAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `SigningLimitAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<SigningLimitAgreements<T>, T> {
    return new GetAllRequestBuilder<SigningLimitAgreements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SigningLimitAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SigningLimitAgreements`.
   */
  create(
    entity: SigningLimitAgreements<T>
  ): CreateRequestBuilder<SigningLimitAgreements<T>, T> {
    return new CreateRequestBuilder<SigningLimitAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SigningLimitAgreements` entity based on its keys.
   * @param agreementName Key property. See {@link SigningLimitAgreements.agreementName}.
   * @returns A request builder for creating requests to retrieve one `SigningLimitAgreements` entity based on its keys.
   */
  getByKey(
    agreementName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SigningLimitAgreements<T>, T> {
    return new GetByKeyRequestBuilder<SigningLimitAgreements<T>, T>(
      this.entityApi,
      { AgreementName: agreementName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SigningLimitAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SigningLimitAgreements`.
   */
  update(
    entity: SigningLimitAgreements<T>
  ): UpdateRequestBuilder<SigningLimitAgreements<T>, T> {
    return new UpdateRequestBuilder<SigningLimitAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SigningLimitAgreements`.
   * @param agreementName Key property. See {@link SigningLimitAgreements.agreementName}.
   * @returns A request builder for creating requests that delete an entity of type `SigningLimitAgreements`.
   */
  delete(
    agreementName: string
  ): DeleteRequestBuilder<SigningLimitAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SigningLimitAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SigningLimitAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: SigningLimitAgreements<T>
  ): DeleteRequestBuilder<SigningLimitAgreements<T>, T>;
  delete(
    agreementNameOrEntity: any
  ): DeleteRequestBuilder<SigningLimitAgreements<T>, T> {
    return new DeleteRequestBuilder<SigningLimitAgreements<T>, T>(
      this.entityApi,
      agreementNameOrEntity instanceof SigningLimitAgreements
        ? agreementNameOrEntity
        : { AgreementName: agreementNameOrEntity! }
    );
  }
}
