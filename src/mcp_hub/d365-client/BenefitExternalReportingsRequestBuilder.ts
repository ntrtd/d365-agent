/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { BenefitExternalReportings } from './BenefitExternalReportings';

/**
 * Request builder class for operations supported on the {@link BenefitExternalReportings} entity.
 */
export class BenefitExternalReportingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitExternalReportings<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitExternalReportings` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitExternalReportings` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitExternalReportings<T>, T> {
    return new GetAllRequestBuilder<BenefitExternalReportings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitExternalReportings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitExternalReportings`.
   */
  create(
    entity: BenefitExternalReportings<T>
  ): CreateRequestBuilder<BenefitExternalReportings<T>, T> {
    return new CreateRequestBuilder<BenefitExternalReportings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitExternalReportings` entity based on its keys.
   * @param benefitPlanId Key property. See {@link BenefitExternalReportings.benefitPlanId}.
   * @param validFrom Key property. See {@link BenefitExternalReportings.validFrom}.
   * @param validTo Key property. See {@link BenefitExternalReportings.validTo}.
   * @param countryRegionId Key property. See {@link BenefitExternalReportings.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `BenefitExternalReportings` entity based on its keys.
   */
  getByKey(
    benefitPlanId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitExternalReportings<T>, T> {
    return new GetByKeyRequestBuilder<BenefitExternalReportings<T>, T>(
      this.entityApi,
      {
        BenefitPlanID: benefitPlanId,
        ValidFrom: validFrom,
        ValidTo: validTo,
        CountryRegionId: countryRegionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitExternalReportings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitExternalReportings`.
   */
  update(
    entity: BenefitExternalReportings<T>
  ): UpdateRequestBuilder<BenefitExternalReportings<T>, T> {
    return new UpdateRequestBuilder<BenefitExternalReportings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitExternalReportings`.
   * @param benefitPlanId Key property. See {@link BenefitExternalReportings.benefitPlanId}.
   * @param validFrom Key property. See {@link BenefitExternalReportings.validFrom}.
   * @param validTo Key property. See {@link BenefitExternalReportings.validTo}.
   * @param countryRegionId Key property. See {@link BenefitExternalReportings.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitExternalReportings`.
   */
  delete(
    benefitPlanId: string,
    validFrom: Moment,
    validTo: Moment,
    countryRegionId: string
  ): DeleteRequestBuilder<BenefitExternalReportings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitExternalReportings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitExternalReportings` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitExternalReportings<T>
  ): DeleteRequestBuilder<BenefitExternalReportings<T>, T>;
  delete(
    benefitPlanIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment,
    countryRegionId?: string
  ): DeleteRequestBuilder<BenefitExternalReportings<T>, T> {
    return new DeleteRequestBuilder<BenefitExternalReportings<T>, T>(
      this.entityApi,
      benefitPlanIdOrEntity instanceof BenefitExternalReportings
        ? benefitPlanIdOrEntity
        : {
            BenefitPlanID: benefitPlanIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
