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
import { BenefitHcmDetails } from './BenefitHcmDetails';

/**
 * Request builder class for operations supported on the {@link BenefitHcmDetails} entity.
 */
export class BenefitHcmDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitHcmDetails<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitHcmDetails` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitHcmDetails` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitHcmDetails<T>, T> {
    return new GetAllRequestBuilder<BenefitHcmDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitHcmDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitHcmDetails`.
   */
  create(
    entity: BenefitHcmDetails<T>
  ): CreateRequestBuilder<BenefitHcmDetails<T>, T> {
    return new CreateRequestBuilder<BenefitHcmDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitHcmDetails` entity based on its keys.
   * @param benefitId Key property. See {@link BenefitHcmDetails.benefitId}.
   * @param effective Key property. See {@link BenefitHcmDetails.effective}.
   * @returns A request builder for creating requests to retrieve one `BenefitHcmDetails` entity based on its keys.
   */
  getByKey(
    benefitId: DeserializedType<T, 'Edm.String'>,
    effective: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitHcmDetails<T>, T> {
    return new GetByKeyRequestBuilder<BenefitHcmDetails<T>, T>(this.entityApi, {
      BenefitId: benefitId,
      Effective: effective
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitHcmDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitHcmDetails`.
   */
  update(
    entity: BenefitHcmDetails<T>
  ): UpdateRequestBuilder<BenefitHcmDetails<T>, T> {
    return new UpdateRequestBuilder<BenefitHcmDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitHcmDetails`.
   * @param benefitId Key property. See {@link BenefitHcmDetails.benefitId}.
   * @param effective Key property. See {@link BenefitHcmDetails.effective}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitHcmDetails`.
   */
  delete(
    benefitId: string,
    effective: Moment
  ): DeleteRequestBuilder<BenefitHcmDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitHcmDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitHcmDetails` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitHcmDetails<T>
  ): DeleteRequestBuilder<BenefitHcmDetails<T>, T>;
  delete(
    benefitIdOrEntity: any,
    effective?: Moment
  ): DeleteRequestBuilder<BenefitHcmDetails<T>, T> {
    return new DeleteRequestBuilder<BenefitHcmDetails<T>, T>(
      this.entityApi,
      benefitIdOrEntity instanceof BenefitHcmDetails
        ? benefitIdOrEntity
        : {
            BenefitId: benefitIdOrEntity!,
            Effective: effective!
          }
    );
  }
}
