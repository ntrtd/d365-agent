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
import { BenefitEarningBasis } from './BenefitEarningBasis';

/**
 * Request builder class for operations supported on the {@link BenefitEarningBasis} entity.
 */
export class BenefitEarningBasisRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitEarningBasis<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitEarningBasis` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitEarningBasis` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitEarningBasis<T>, T> {
    return new GetAllRequestBuilder<BenefitEarningBasis<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitEarningBasis` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitEarningBasis`.
   */
  create(
    entity: BenefitEarningBasis<T>
  ): CreateRequestBuilder<BenefitEarningBasis<T>, T> {
    return new CreateRequestBuilder<BenefitEarningBasis<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitEarningBasis` entity based on its keys.
   * @param earningCodeId Key property. See {@link BenefitEarningBasis.earningCodeId}.
   * @param benefitPlanId Key property. See {@link BenefitEarningBasis.benefitPlanId}.
   * @param benefitOptionId Key property. See {@link BenefitEarningBasis.benefitOptionId}.
   * @param effective Key property. See {@link BenefitEarningBasis.effective}.
   * @param expiration Key property. See {@link BenefitEarningBasis.expiration}.
   * @returns A request builder for creating requests to retrieve one `BenefitEarningBasis` entity based on its keys.
   */
  getByKey(
    earningCodeId: DeserializedType<T, 'Edm.String'>,
    benefitPlanId: DeserializedType<T, 'Edm.String'>,
    benefitOptionId: DeserializedType<T, 'Edm.String'>,
    effective: DeserializedType<T, 'Edm.DateTimeOffset'>,
    expiration: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitEarningBasis<T>, T> {
    return new GetByKeyRequestBuilder<BenefitEarningBasis<T>, T>(
      this.entityApi,
      {
        EarningCodeId: earningCodeId,
        BenefitPlanId: benefitPlanId,
        BenefitOptionId: benefitOptionId,
        Effective: effective,
        Expiration: expiration
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitEarningBasis`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitEarningBasis`.
   */
  update(
    entity: BenefitEarningBasis<T>
  ): UpdateRequestBuilder<BenefitEarningBasis<T>, T> {
    return new UpdateRequestBuilder<BenefitEarningBasis<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitEarningBasis`.
   * @param earningCodeId Key property. See {@link BenefitEarningBasis.earningCodeId}.
   * @param benefitPlanId Key property. See {@link BenefitEarningBasis.benefitPlanId}.
   * @param benefitOptionId Key property. See {@link BenefitEarningBasis.benefitOptionId}.
   * @param effective Key property. See {@link BenefitEarningBasis.effective}.
   * @param expiration Key property. See {@link BenefitEarningBasis.expiration}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitEarningBasis`.
   */
  delete(
    earningCodeId: string,
    benefitPlanId: string,
    benefitOptionId: string,
    effective: Moment,
    expiration: Moment
  ): DeleteRequestBuilder<BenefitEarningBasis<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitEarningBasis`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitEarningBasis` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitEarningBasis<T>
  ): DeleteRequestBuilder<BenefitEarningBasis<T>, T>;
  delete(
    earningCodeIdOrEntity: any,
    benefitPlanId?: string,
    benefitOptionId?: string,
    effective?: Moment,
    expiration?: Moment
  ): DeleteRequestBuilder<BenefitEarningBasis<T>, T> {
    return new DeleteRequestBuilder<BenefitEarningBasis<T>, T>(
      this.entityApi,
      earningCodeIdOrEntity instanceof BenefitEarningBasis
        ? earningCodeIdOrEntity
        : {
            EarningCodeId: earningCodeIdOrEntity!,
            BenefitPlanId: benefitPlanId!,
            BenefitOptionId: benefitOptionId!,
            Effective: effective!,
            Expiration: expiration!
          }
    );
  }
}
