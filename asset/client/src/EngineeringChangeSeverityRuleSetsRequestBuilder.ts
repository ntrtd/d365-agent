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
import { EngineeringChangeSeverityRuleSets } from './EngineeringChangeSeverityRuleSets';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeSeverityRuleSets} entity.
 */
export class EngineeringChangeSeverityRuleSetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeSeverityRuleSets<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeSeverityRuleSets` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeSeverityRuleSets` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeSeverityRuleSets<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeSeverityRuleSets<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeSeverityRuleSets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeSeverityRuleSets`.
   */
  create(
    entity: EngineeringChangeSeverityRuleSets<T>
  ): CreateRequestBuilder<EngineeringChangeSeverityRuleSets<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeSeverityRuleSets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeSeverityRuleSets` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeSeverityRuleSets.dataAreaId}.
   * @param severityName Key property. See {@link EngineeringChangeSeverityRuleSets.severityName}.
   * @param sequenceNumber Key property. See {@link EngineeringChangeSeverityRuleSets.sequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeSeverityRuleSets` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    severityName: DeserializedType<T, 'Edm.String'>,
    sequenceNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<EngineeringChangeSeverityRuleSets<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeSeverityRuleSets<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SeverityName: severityName,
        SequenceNumber: sequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeSeverityRuleSets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeSeverityRuleSets`.
   */
  update(
    entity: EngineeringChangeSeverityRuleSets<T>
  ): UpdateRequestBuilder<EngineeringChangeSeverityRuleSets<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeSeverityRuleSets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeSeverityRuleSets`.
   * @param dataAreaId Key property. See {@link EngineeringChangeSeverityRuleSets.dataAreaId}.
   * @param severityName Key property. See {@link EngineeringChangeSeverityRuleSets.severityName}.
   * @param sequenceNumber Key property. See {@link EngineeringChangeSeverityRuleSets.sequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeSeverityRuleSets`.
   */
  delete(
    dataAreaId: string,
    severityName: string,
    sequenceNumber: BigNumber
  ): DeleteRequestBuilder<EngineeringChangeSeverityRuleSets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeSeverityRuleSets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeSeverityRuleSets` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeSeverityRuleSets<T>
  ): DeleteRequestBuilder<EngineeringChangeSeverityRuleSets<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    severityName?: string,
    sequenceNumber?: BigNumber
  ): DeleteRequestBuilder<EngineeringChangeSeverityRuleSets<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeSeverityRuleSets<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeSeverityRuleSets
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SeverityName: severityName!,
            SequenceNumber: sequenceNumber!
          }
    );
  }
}
