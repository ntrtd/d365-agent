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
import { SigningLimitRevocationReasonCodes } from './SigningLimitRevocationReasonCodes';

/**
 * Request builder class for operations supported on the {@link SigningLimitRevocationReasonCodes} entity.
 */
export class SigningLimitRevocationReasonCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SigningLimitRevocationReasonCodes<T>, T> {
  /**
   * Returns a request builder for querying all `SigningLimitRevocationReasonCodes` entities.
   * @returns A request builder for creating requests to retrieve all `SigningLimitRevocationReasonCodes` entities.
   */
  getAll(): GetAllRequestBuilder<SigningLimitRevocationReasonCodes<T>, T> {
    return new GetAllRequestBuilder<SigningLimitRevocationReasonCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SigningLimitRevocationReasonCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SigningLimitRevocationReasonCodes`.
   */
  create(
    entity: SigningLimitRevocationReasonCodes<T>
  ): CreateRequestBuilder<SigningLimitRevocationReasonCodes<T>, T> {
    return new CreateRequestBuilder<SigningLimitRevocationReasonCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SigningLimitRevocationReasonCodes` entity based on its keys.
   * @param reasonCode Key property. See {@link SigningLimitRevocationReasonCodes.reasonCode}.
   * @returns A request builder for creating requests to retrieve one `SigningLimitRevocationReasonCodes` entity based on its keys.
   */
  getByKey(
    reasonCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SigningLimitRevocationReasonCodes<T>, T> {
    return new GetByKeyRequestBuilder<SigningLimitRevocationReasonCodes<T>, T>(
      this.entityApi,
      { ReasonCode: reasonCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SigningLimitRevocationReasonCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SigningLimitRevocationReasonCodes`.
   */
  update(
    entity: SigningLimitRevocationReasonCodes<T>
  ): UpdateRequestBuilder<SigningLimitRevocationReasonCodes<T>, T> {
    return new UpdateRequestBuilder<SigningLimitRevocationReasonCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SigningLimitRevocationReasonCodes`.
   * @param reasonCode Key property. See {@link SigningLimitRevocationReasonCodes.reasonCode}.
   * @returns A request builder for creating requests that delete an entity of type `SigningLimitRevocationReasonCodes`.
   */
  delete(
    reasonCode: string
  ): DeleteRequestBuilder<SigningLimitRevocationReasonCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SigningLimitRevocationReasonCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SigningLimitRevocationReasonCodes` by taking the entity as a parameter.
   */
  delete(
    entity: SigningLimitRevocationReasonCodes<T>
  ): DeleteRequestBuilder<SigningLimitRevocationReasonCodes<T>, T>;
  delete(
    reasonCodeOrEntity: any
  ): DeleteRequestBuilder<SigningLimitRevocationReasonCodes<T>, T> {
    return new DeleteRequestBuilder<SigningLimitRevocationReasonCodes<T>, T>(
      this.entityApi,
      reasonCodeOrEntity instanceof SigningLimitRevocationReasonCodes
        ? reasonCodeOrEntity
        : { ReasonCode: reasonCodeOrEntity! }
    );
  }
}
