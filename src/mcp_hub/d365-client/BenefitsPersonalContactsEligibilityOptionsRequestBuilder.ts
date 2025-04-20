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
import { BenefitsPersonalContactsEligibilityOptions } from './BenefitsPersonalContactsEligibilityOptions';

/**
 * Request builder class for operations supported on the {@link BenefitsPersonalContactsEligibilityOptions} entity.
 */
export class BenefitsPersonalContactsEligibilityOptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPersonalContactsEligibilityOptions<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPersonalContactsEligibilityOptions` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPersonalContactsEligibilityOptions` entities.
   */
  getAll(): GetAllRequestBuilder<
    BenefitsPersonalContactsEligibilityOptions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BenefitsPersonalContactsEligibilityOptions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsPersonalContactsEligibilityOptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPersonalContactsEligibilityOptions`.
   */
  create(
    entity: BenefitsPersonalContactsEligibilityOptions<T>
  ): CreateRequestBuilder<BenefitsPersonalContactsEligibilityOptions<T>, T> {
    return new CreateRequestBuilder<
      BenefitsPersonalContactsEligibilityOptions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPersonalContactsEligibilityOptions` entity based on its keys.
   * @param eligibilityOptionId Key property. See {@link BenefitsPersonalContactsEligibilityOptions.eligibilityOptionId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPersonalContactsEligibilityOptions` entity based on its keys.
   */
  getByKey(
    eligibilityOptionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsPersonalContactsEligibilityOptions<T>, T> {
    return new GetByKeyRequestBuilder<
      BenefitsPersonalContactsEligibilityOptions<T>,
      T
    >(this.entityApi, { EligibilityOptionId: eligibilityOptionId });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPersonalContactsEligibilityOptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPersonalContactsEligibilityOptions`.
   */
  update(
    entity: BenefitsPersonalContactsEligibilityOptions<T>
  ): UpdateRequestBuilder<BenefitsPersonalContactsEligibilityOptions<T>, T> {
    return new UpdateRequestBuilder<
      BenefitsPersonalContactsEligibilityOptions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPersonalContactsEligibilityOptions`.
   * @param eligibilityOptionId Key property. See {@link BenefitsPersonalContactsEligibilityOptions.eligibilityOptionId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPersonalContactsEligibilityOptions`.
   */
  delete(
    eligibilityOptionId: string
  ): DeleteRequestBuilder<BenefitsPersonalContactsEligibilityOptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPersonalContactsEligibilityOptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPersonalContactsEligibilityOptions` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPersonalContactsEligibilityOptions<T>
  ): DeleteRequestBuilder<BenefitsPersonalContactsEligibilityOptions<T>, T>;
  delete(
    eligibilityOptionIdOrEntity: any
  ): DeleteRequestBuilder<BenefitsPersonalContactsEligibilityOptions<T>, T> {
    return new DeleteRequestBuilder<
      BenefitsPersonalContactsEligibilityOptions<T>,
      T
    >(
      this.entityApi,
      eligibilityOptionIdOrEntity instanceof
      BenefitsPersonalContactsEligibilityOptions
        ? eligibilityOptionIdOrEntity
        : { EligibilityOptionId: eligibilityOptionIdOrEntity! }
    );
  }
}
