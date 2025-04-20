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
import { BenefitsCoverageOptionPersonalContactsEligibilityOptions } from './BenefitsCoverageOptionPersonalContactsEligibilityOptions';

/**
 * Request builder class for operations supported on the {@link BenefitsCoverageOptionPersonalContactsEligibilityOptions} entity.
 */
export class BenefitsCoverageOptionPersonalContactsEligibilityOptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
  T
> {
  /**
   * Returns a request builder for querying all `BenefitsCoverageOptionPersonalContactsEligibilityOptions` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsCoverageOptionPersonalContactsEligibilityOptions` entities.
   */
  getAll(): GetAllRequestBuilder<
    BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsCoverageOptionPersonalContactsEligibilityOptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsCoverageOptionPersonalContactsEligibilityOptions`.
   */
  create(
    entity: BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>
  ): CreateRequestBuilder<
    BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
    T
  > {
    return new CreateRequestBuilder<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BenefitsCoverageOptionPersonalContactsEligibilityOptions` entity based on its keys.
   * @param coverageOptionId Key property. See {@link BenefitsCoverageOptionPersonalContactsEligibilityOptions.coverageOptionId}.
   * @param personalContactsEligibilityOptionId Key property. See {@link BenefitsCoverageOptionPersonalContactsEligibilityOptions.personalContactsEligibilityOptionId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsCoverageOptionPersonalContactsEligibilityOptions` entity based on its keys.
   */
  getByKey(
    coverageOptionId: DeserializedType<T, 'Edm.String'>,
    personalContactsEligibilityOptionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
      T
    >(this.entityApi, {
      CoverageOptionId: coverageOptionId,
      PersonalContactsEligibilityOptionId: personalContactsEligibilityOptionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsCoverageOptionPersonalContactsEligibilityOptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsCoverageOptionPersonalContactsEligibilityOptions`.
   */
  update(
    entity: BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>
  ): UpdateRequestBuilder<
    BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
    T
  > {
    return new UpdateRequestBuilder<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsCoverageOptionPersonalContactsEligibilityOptions`.
   * @param coverageOptionId Key property. See {@link BenefitsCoverageOptionPersonalContactsEligibilityOptions.coverageOptionId}.
   * @param personalContactsEligibilityOptionId Key property. See {@link BenefitsCoverageOptionPersonalContactsEligibilityOptions.personalContactsEligibilityOptionId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsCoverageOptionPersonalContactsEligibilityOptions`.
   */
  delete(
    coverageOptionId: string,
    personalContactsEligibilityOptionId: string
  ): DeleteRequestBuilder<
    BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsCoverageOptionPersonalContactsEligibilityOptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsCoverageOptionPersonalContactsEligibilityOptions` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>
  ): DeleteRequestBuilder<
    BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
    T
  >;
  delete(
    coverageOptionIdOrEntity: any,
    personalContactsEligibilityOptionId?: string
  ): DeleteRequestBuilder<
    BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
    T
  > {
    return new DeleteRequestBuilder<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>,
      T
    >(
      this.entityApi,
      coverageOptionIdOrEntity instanceof
      BenefitsCoverageOptionPersonalContactsEligibilityOptions
        ? coverageOptionIdOrEntity
        : {
            CoverageOptionId: coverageOptionIdOrEntity!,
            PersonalContactsEligibilityOptionId:
              personalContactsEligibilityOptionId!
          }
    );
  }
}
