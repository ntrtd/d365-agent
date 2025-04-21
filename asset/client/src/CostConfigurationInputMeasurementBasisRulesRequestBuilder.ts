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
import { CostConfigurationInputMeasurementBasisRules } from './CostConfigurationInputMeasurementBasisRules';

/**
 * Request builder class for operations supported on the {@link CostConfigurationInputMeasurementBasisRules} entity.
 */
export class CostConfigurationInputMeasurementBasisRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostConfigurationInputMeasurementBasisRules<T>, T> {
  /**
   * Returns a request builder for querying all `CostConfigurationInputMeasurementBasisRules` entities.
   * @returns A request builder for creating requests to retrieve all `CostConfigurationInputMeasurementBasisRules` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostConfigurationInputMeasurementBasisRules<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostConfigurationInputMeasurementBasisRules<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostConfigurationInputMeasurementBasisRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostConfigurationInputMeasurementBasisRules`.
   */
  create(
    entity: CostConfigurationInputMeasurementBasisRules<T>
  ): CreateRequestBuilder<CostConfigurationInputMeasurementBasisRules<T>, T> {
    return new CreateRequestBuilder<
      CostConfigurationInputMeasurementBasisRules<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostConfigurationInputMeasurementBasisRules` entity based on its keys.
   * @param validFrom Key property. See {@link CostConfigurationInputMeasurementBasisRules.validFrom}.
   * @param inputMeasurementBasisPolicyName Key property. See {@link CostConfigurationInputMeasurementBasisRules.inputMeasurementBasisPolicyName}.
   * @returns A request builder for creating requests to retrieve one `CostConfigurationInputMeasurementBasisRules` entity based on its keys.
   */
  getByKey(
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    inputMeasurementBasisPolicyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostConfigurationInputMeasurementBasisRules<T>, T> {
    return new GetByKeyRequestBuilder<
      CostConfigurationInputMeasurementBasisRules<T>,
      T
    >(this.entityApi, {
      ValidFrom: validFrom,
      InputMeasurementBasisPolicyName: inputMeasurementBasisPolicyName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostConfigurationInputMeasurementBasisRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostConfigurationInputMeasurementBasisRules`.
   */
  update(
    entity: CostConfigurationInputMeasurementBasisRules<T>
  ): UpdateRequestBuilder<CostConfigurationInputMeasurementBasisRules<T>, T> {
    return new UpdateRequestBuilder<
      CostConfigurationInputMeasurementBasisRules<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationInputMeasurementBasisRules`.
   * @param validFrom Key property. See {@link CostConfigurationInputMeasurementBasisRules.validFrom}.
   * @param inputMeasurementBasisPolicyName Key property. See {@link CostConfigurationInputMeasurementBasisRules.inputMeasurementBasisPolicyName}.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationInputMeasurementBasisRules`.
   */
  delete(
    validFrom: Moment,
    inputMeasurementBasisPolicyName: string
  ): DeleteRequestBuilder<CostConfigurationInputMeasurementBasisRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationInputMeasurementBasisRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationInputMeasurementBasisRules` by taking the entity as a parameter.
   */
  delete(
    entity: CostConfigurationInputMeasurementBasisRules<T>
  ): DeleteRequestBuilder<CostConfigurationInputMeasurementBasisRules<T>, T>;
  delete(
    validFromOrEntity: any,
    inputMeasurementBasisPolicyName?: string
  ): DeleteRequestBuilder<CostConfigurationInputMeasurementBasisRules<T>, T> {
    return new DeleteRequestBuilder<
      CostConfigurationInputMeasurementBasisRules<T>,
      T
    >(
      this.entityApi,
      validFromOrEntity instanceof CostConfigurationInputMeasurementBasisRules
        ? validFromOrEntity
        : {
            ValidFrom: validFromOrEntity!,
            InputMeasurementBasisPolicyName: inputMeasurementBasisPolicyName!
          }
    );
  }
}
