/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes } from './EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes} entity.
 */
export class EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes`.
   */
  create(
    entity: EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes` entity based on its keys.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes.engineeringChangeOrderProductLineNumber}.
   * @param environmentalHealthAndSafetyCode Key property. See {@link EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes.environmentalHealthAndSafetyCode}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes` entity based on its keys.
   */
  getByKey(
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    environmentalHealthAndSafetyCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
      T
    >(this.entityApi, {
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      EnvironmentalHealthAndSafetyCode: environmentalHealthAndSafetyCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes`.
   */
  update(
    entity: EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes`.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes.engineeringChangeOrderProductLineNumber}.
   * @param environmentalHealthAndSafetyCode Key property. See {@link EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes.environmentalHealthAndSafetyCode}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes`.
   */
  delete(
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    environmentalHealthAndSafetyCode: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
    T
  >;
  delete(
    engineeringChangeOrderNumberOrEntity: any,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    environmentalHealthAndSafetyCode?: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>,
      T
    >(
      this.entityApi,
      engineeringChangeOrderNumberOrEntity instanceof
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes
        ? engineeringChangeOrderNumberOrEntity
        : {
            EngineeringChangeOrderNumber: engineeringChangeOrderNumberOrEntity!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            EnvironmentalHealthAndSafetyCode: environmentalHealthAndSafetyCode!
          }
    );
  }
}
