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
import { RebateAndDeductionAgreementHeaders } from './RebateAndDeductionAgreementHeaders';

/**
 * Request builder class for operations supported on the {@link RebateAndDeductionAgreementHeaders} entity.
 */
export class RebateAndDeductionAgreementHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RebateAndDeductionAgreementHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `RebateAndDeductionAgreementHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `RebateAndDeductionAgreementHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<RebateAndDeductionAgreementHeaders<T>, T> {
    return new GetAllRequestBuilder<RebateAndDeductionAgreementHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RebateAndDeductionAgreementHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RebateAndDeductionAgreementHeaders`.
   */
  create(
    entity: RebateAndDeductionAgreementHeaders<T>
  ): CreateRequestBuilder<RebateAndDeductionAgreementHeaders<T>, T> {
    return new CreateRequestBuilder<RebateAndDeductionAgreementHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RebateAndDeductionAgreementHeaders` entity based on its keys.
   * @param agreementNumber Key property. See {@link RebateAndDeductionAgreementHeaders.agreementNumber}.
   * @returns A request builder for creating requests to retrieve one `RebateAndDeductionAgreementHeaders` entity based on its keys.
   */
  getByKey(
    agreementNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RebateAndDeductionAgreementHeaders<T>, T> {
    return new GetByKeyRequestBuilder<RebateAndDeductionAgreementHeaders<T>, T>(
      this.entityApi,
      { AgreementNumber: agreementNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RebateAndDeductionAgreementHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RebateAndDeductionAgreementHeaders`.
   */
  update(
    entity: RebateAndDeductionAgreementHeaders<T>
  ): UpdateRequestBuilder<RebateAndDeductionAgreementHeaders<T>, T> {
    return new UpdateRequestBuilder<RebateAndDeductionAgreementHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionAgreementHeaders`.
   * @param agreementNumber Key property. See {@link RebateAndDeductionAgreementHeaders.agreementNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionAgreementHeaders`.
   */
  delete(
    agreementNumber: string
  ): DeleteRequestBuilder<RebateAndDeductionAgreementHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionAgreementHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionAgreementHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: RebateAndDeductionAgreementHeaders<T>
  ): DeleteRequestBuilder<RebateAndDeductionAgreementHeaders<T>, T>;
  delete(
    agreementNumberOrEntity: any
  ): DeleteRequestBuilder<RebateAndDeductionAgreementHeaders<T>, T> {
    return new DeleteRequestBuilder<RebateAndDeductionAgreementHeaders<T>, T>(
      this.entityApi,
      agreementNumberOrEntity instanceof RebateAndDeductionAgreementHeaders
        ? agreementNumberOrEntity
        : { AgreementNumber: agreementNumberOrEntity! }
    );
  }
}
