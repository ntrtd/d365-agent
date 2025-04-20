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
import { BenefitsDeductions } from './BenefitsDeductions';

/**
 * Request builder class for operations supported on the {@link BenefitsDeductions} entity.
 */
export class BenefitsDeductionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsDeductions<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsDeductions` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsDeductions` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsDeductions<T>, T> {
    return new GetAllRequestBuilder<BenefitsDeductions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsDeductions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsDeductions`.
   */
  create(
    entity: BenefitsDeductions<T>
  ): CreateRequestBuilder<BenefitsDeductions<T>, T> {
    return new CreateRequestBuilder<BenefitsDeductions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsDeductions` entity based on its keys.
   * @param deductionId Key property. See {@link BenefitsDeductions.deductionId}.
   * @param validFrom Key property. See {@link BenefitsDeductions.validFrom}.
   * @param validTo Key property. See {@link BenefitsDeductions.validTo}.
   * @returns A request builder for creating requests to retrieve one `BenefitsDeductions` entity based on its keys.
   */
  getByKey(
    deductionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitsDeductions<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsDeductions<T>, T>(
      this.entityApi,
      {
        DeductionId: deductionId,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsDeductions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsDeductions`.
   */
  update(
    entity: BenefitsDeductions<T>
  ): UpdateRequestBuilder<BenefitsDeductions<T>, T> {
    return new UpdateRequestBuilder<BenefitsDeductions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsDeductions`.
   * @param deductionId Key property. See {@link BenefitsDeductions.deductionId}.
   * @param validFrom Key property. See {@link BenefitsDeductions.validFrom}.
   * @param validTo Key property. See {@link BenefitsDeductions.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsDeductions`.
   */
  delete(
    deductionId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<BenefitsDeductions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsDeductions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsDeductions` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsDeductions<T>
  ): DeleteRequestBuilder<BenefitsDeductions<T>, T>;
  delete(
    deductionIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<BenefitsDeductions<T>, T> {
    return new DeleteRequestBuilder<BenefitsDeductions<T>, T>(
      this.entityApi,
      deductionIdOrEntity instanceof BenefitsDeductions
        ? deductionIdOrEntity
        : {
            DeductionId: deductionIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
