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
import { BenefitDetails } from './BenefitDetails';

/**
 * Request builder class for operations supported on the {@link BenefitDetails} entity.
 */
export class BenefitDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitDetails<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitDetails` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitDetails` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitDetails<T>, T> {
    return new GetAllRequestBuilder<BenefitDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitDetails`.
   */
  create(
    entity: BenefitDetails<T>
  ): CreateRequestBuilder<BenefitDetails<T>, T> {
    return new CreateRequestBuilder<BenefitDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitDetails` entity based on its keys.
   * @param benefitId Key property. See {@link BenefitDetails.benefitId}.
   * @param validFrom Key property. See {@link BenefitDetails.validFrom}.
   * @param validTo Key property. See {@link BenefitDetails.validTo}.
   * @returns A request builder for creating requests to retrieve one `BenefitDetails` entity based on its keys.
   */
  getByKey(
    benefitId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitDetails<T>, T> {
    return new GetByKeyRequestBuilder<BenefitDetails<T>, T>(this.entityApi, {
      BenefitId: benefitId,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitDetails`.
   */
  update(
    entity: BenefitDetails<T>
  ): UpdateRequestBuilder<BenefitDetails<T>, T> {
    return new UpdateRequestBuilder<BenefitDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitDetails`.
   * @param benefitId Key property. See {@link BenefitDetails.benefitId}.
   * @param validFrom Key property. See {@link BenefitDetails.validFrom}.
   * @param validTo Key property. See {@link BenefitDetails.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitDetails`.
   */
  delete(
    benefitId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<BenefitDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitDetails` by taking the entity as a parameter.
   */
  delete(entity: BenefitDetails<T>): DeleteRequestBuilder<BenefitDetails<T>, T>;
  delete(
    benefitIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<BenefitDetails<T>, T> {
    return new DeleteRequestBuilder<BenefitDetails<T>, T>(
      this.entityApi,
      benefitIdOrEntity instanceof BenefitDetails
        ? benefitIdOrEntity
        : {
            BenefitId: benefitIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
