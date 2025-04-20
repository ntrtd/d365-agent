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
import { GupRebateAndDeductionsAgreementHeaders } from './GupRebateAndDeductionsAgreementHeaders';

/**
 * Request builder class for operations supported on the {@link GupRebateAndDeductionsAgreementHeaders} entity.
 */
export class GupRebateAndDeductionsAgreementHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GupRebateAndDeductionsAgreementHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `GupRebateAndDeductionsAgreementHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `GupRebateAndDeductionsAgreementHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<GupRebateAndDeductionsAgreementHeaders<T>, T> {
    return new GetAllRequestBuilder<
      GupRebateAndDeductionsAgreementHeaders<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GupRebateAndDeductionsAgreementHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GupRebateAndDeductionsAgreementHeaders`.
   */
  create(
    entity: GupRebateAndDeductionsAgreementHeaders<T>
  ): CreateRequestBuilder<GupRebateAndDeductionsAgreementHeaders<T>, T> {
    return new CreateRequestBuilder<
      GupRebateAndDeductionsAgreementHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `GupRebateAndDeductionsAgreementHeaders` entity based on its keys.
   * @param agreementNumber Key property. See {@link GupRebateAndDeductionsAgreementHeaders.agreementNumber}.
   * @returns A request builder for creating requests to retrieve one `GupRebateAndDeductionsAgreementHeaders` entity based on its keys.
   */
  getByKey(
    agreementNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GupRebateAndDeductionsAgreementHeaders<T>, T> {
    return new GetByKeyRequestBuilder<
      GupRebateAndDeductionsAgreementHeaders<T>,
      T
    >(this.entityApi, { AgreementNumber: agreementNumber });
  }

  /**
   * Returns a request builder for updating an entity of type `GupRebateAndDeductionsAgreementHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GupRebateAndDeductionsAgreementHeaders`.
   */
  update(
    entity: GupRebateAndDeductionsAgreementHeaders<T>
  ): UpdateRequestBuilder<GupRebateAndDeductionsAgreementHeaders<T>, T> {
    return new UpdateRequestBuilder<
      GupRebateAndDeductionsAgreementHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GupRebateAndDeductionsAgreementHeaders`.
   * @param agreementNumber Key property. See {@link GupRebateAndDeductionsAgreementHeaders.agreementNumber}.
   * @returns A request builder for creating requests that delete an entity of type `GupRebateAndDeductionsAgreementHeaders`.
   */
  delete(
    agreementNumber: string
  ): DeleteRequestBuilder<GupRebateAndDeductionsAgreementHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GupRebateAndDeductionsAgreementHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GupRebateAndDeductionsAgreementHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: GupRebateAndDeductionsAgreementHeaders<T>
  ): DeleteRequestBuilder<GupRebateAndDeductionsAgreementHeaders<T>, T>;
  delete(
    agreementNumberOrEntity: any
  ): DeleteRequestBuilder<GupRebateAndDeductionsAgreementHeaders<T>, T> {
    return new DeleteRequestBuilder<
      GupRebateAndDeductionsAgreementHeaders<T>,
      T
    >(
      this.entityApi,
      agreementNumberOrEntity instanceof GupRebateAndDeductionsAgreementHeaders
        ? agreementNumberOrEntity
        : { AgreementNumber: agreementNumberOrEntity! }
    );
  }
}
