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
import { BenefitsCredits } from './BenefitsCredits';

/**
 * Request builder class for operations supported on the {@link BenefitsCredits} entity.
 */
export class BenefitsCreditsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsCredits<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsCredits` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsCredits` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsCredits<T>, T> {
    return new GetAllRequestBuilder<BenefitsCredits<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsCredits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsCredits`.
   */
  create(
    entity: BenefitsCredits<T>
  ): CreateRequestBuilder<BenefitsCredits<T>, T> {
    return new CreateRequestBuilder<BenefitsCredits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsCredits` entity based on its keys.
   * @param dataAreaId Key property. See {@link BenefitsCredits.dataAreaId}.
   * @param benefitCreditId Key property. See {@link BenefitsCredits.benefitCreditId}.
   * @param validTo Key property. See {@link BenefitsCredits.validTo}.
   * @param validFrom Key property. See {@link BenefitsCredits.validFrom}.
   * @returns A request builder for creating requests to retrieve one `BenefitsCredits` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    benefitCreditId: DeserializedType<T, 'Edm.String'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitsCredits<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsCredits<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BenefitCreditId: benefitCreditId,
      ValidTo: validTo,
      ValidFrom: validFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsCredits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsCredits`.
   */
  update(
    entity: BenefitsCredits<T>
  ): UpdateRequestBuilder<BenefitsCredits<T>, T> {
    return new UpdateRequestBuilder<BenefitsCredits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsCredits`.
   * @param dataAreaId Key property. See {@link BenefitsCredits.dataAreaId}.
   * @param benefitCreditId Key property. See {@link BenefitsCredits.benefitCreditId}.
   * @param validTo Key property. See {@link BenefitsCredits.validTo}.
   * @param validFrom Key property. See {@link BenefitsCredits.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsCredits`.
   */
  delete(
    dataAreaId: string,
    benefitCreditId: string,
    validTo: Moment,
    validFrom: Moment
  ): DeleteRequestBuilder<BenefitsCredits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsCredits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsCredits` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsCredits<T>
  ): DeleteRequestBuilder<BenefitsCredits<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    benefitCreditId?: string,
    validTo?: Moment,
    validFrom?: Moment
  ): DeleteRequestBuilder<BenefitsCredits<T>, T> {
    return new DeleteRequestBuilder<BenefitsCredits<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BenefitsCredits
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BenefitCreditId: benefitCreditId!,
            ValidTo: validTo!,
            ValidFrom: validFrom!
          }
    );
  }
}
