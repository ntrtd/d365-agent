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
import { EngineeringChangeSeverityRules } from './EngineeringChangeSeverityRules';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeSeverityRules} entity.
 */
export class EngineeringChangeSeverityRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeSeverityRules<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeSeverityRules` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeSeverityRules` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeSeverityRules<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeSeverityRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeSeverityRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeSeverityRules`.
   */
  create(
    entity: EngineeringChangeSeverityRules<T>
  ): CreateRequestBuilder<EngineeringChangeSeverityRules<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeSeverityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeSeverityRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeSeverityRules.dataAreaId}.
   * @param severityName Key property. See {@link EngineeringChangeSeverityRules.severityName}.
   * @param ruleSetSequenceNumber Key property. See {@link EngineeringChangeSeverityRules.ruleSetSequenceNumber}.
   * @param ruleClassName Key property. See {@link EngineeringChangeSeverityRules.ruleClassName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeSeverityRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    severityName: DeserializedType<T, 'Edm.String'>,
    ruleSetSequenceNumber: DeserializedType<T, 'Edm.Decimal'>,
    ruleClassName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeSeverityRules<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeSeverityRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SeverityName: severityName,
        RuleSetSequenceNumber: ruleSetSequenceNumber,
        RuleClassName: ruleClassName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeSeverityRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeSeverityRules`.
   */
  update(
    entity: EngineeringChangeSeverityRules<T>
  ): UpdateRequestBuilder<EngineeringChangeSeverityRules<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeSeverityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeSeverityRules`.
   * @param dataAreaId Key property. See {@link EngineeringChangeSeverityRules.dataAreaId}.
   * @param severityName Key property. See {@link EngineeringChangeSeverityRules.severityName}.
   * @param ruleSetSequenceNumber Key property. See {@link EngineeringChangeSeverityRules.ruleSetSequenceNumber}.
   * @param ruleClassName Key property. See {@link EngineeringChangeSeverityRules.ruleClassName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeSeverityRules`.
   */
  delete(
    dataAreaId: string,
    severityName: string,
    ruleSetSequenceNumber: BigNumber,
    ruleClassName: string
  ): DeleteRequestBuilder<EngineeringChangeSeverityRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeSeverityRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeSeverityRules` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeSeverityRules<T>
  ): DeleteRequestBuilder<EngineeringChangeSeverityRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    severityName?: string,
    ruleSetSequenceNumber?: BigNumber,
    ruleClassName?: string
  ): DeleteRequestBuilder<EngineeringChangeSeverityRules<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeSeverityRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeSeverityRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SeverityName: severityName!,
            RuleSetSequenceNumber: ruleSetSequenceNumber!,
            RuleClassName: ruleClassName!
          }
    );
  }
}
