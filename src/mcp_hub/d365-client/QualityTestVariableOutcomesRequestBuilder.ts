/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { QualityTestVariableOutcomes } from './QualityTestVariableOutcomes';

/**
 * Request builder class for operations supported on the {@link QualityTestVariableOutcomes} entity.
 */
export class QualityTestVariableOutcomesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<QualityTestVariableOutcomes<T>, T> {
  /**
   * Returns a request builder for querying all `QualityTestVariableOutcomes` entities.
   * @returns A request builder for creating requests to retrieve all `QualityTestVariableOutcomes` entities.
   */
  getAll(): GetAllRequestBuilder<QualityTestVariableOutcomes<T>, T> {
    return new GetAllRequestBuilder<QualityTestVariableOutcomes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `QualityTestVariableOutcomes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `QualityTestVariableOutcomes`.
   */
  create(
    entity: QualityTestVariableOutcomes<T>
  ): CreateRequestBuilder<QualityTestVariableOutcomes<T>, T> {
    return new CreateRequestBuilder<QualityTestVariableOutcomes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `QualityTestVariableOutcomes` entity based on its keys.
   * @param dataAreaId Key property. See {@link QualityTestVariableOutcomes.dataAreaId}.
   * @param qualityTestVariableId Key property. See {@link QualityTestVariableOutcomes.qualityTestVariableId}.
   * @param outcomeId Key property. See {@link QualityTestVariableOutcomes.outcomeId}.
   * @returns A request builder for creating requests to retrieve one `QualityTestVariableOutcomes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    qualityTestVariableId: DeserializedType<T, 'Edm.String'>,
    outcomeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<QualityTestVariableOutcomes<T>, T> {
    return new GetByKeyRequestBuilder<QualityTestVariableOutcomes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        QualityTestVariableId: qualityTestVariableId,
        OutcomeId: outcomeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `QualityTestVariableOutcomes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `QualityTestVariableOutcomes`.
   */
  update(
    entity: QualityTestVariableOutcomes<T>
  ): UpdateRequestBuilder<QualityTestVariableOutcomes<T>, T> {
    return new UpdateRequestBuilder<QualityTestVariableOutcomes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `QualityTestVariableOutcomes`.
   * @param dataAreaId Key property. See {@link QualityTestVariableOutcomes.dataAreaId}.
   * @param qualityTestVariableId Key property. See {@link QualityTestVariableOutcomes.qualityTestVariableId}.
   * @param outcomeId Key property. See {@link QualityTestVariableOutcomes.outcomeId}.
   * @returns A request builder for creating requests that delete an entity of type `QualityTestVariableOutcomes`.
   */
  delete(
    dataAreaId: string,
    qualityTestVariableId: string,
    outcomeId: string
  ): DeleteRequestBuilder<QualityTestVariableOutcomes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `QualityTestVariableOutcomes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `QualityTestVariableOutcomes` by taking the entity as a parameter.
   */
  delete(
    entity: QualityTestVariableOutcomes<T>
  ): DeleteRequestBuilder<QualityTestVariableOutcomes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    qualityTestVariableId?: string,
    outcomeId?: string
  ): DeleteRequestBuilder<QualityTestVariableOutcomes<T>, T> {
    return new DeleteRequestBuilder<QualityTestVariableOutcomes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof QualityTestVariableOutcomes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            QualityTestVariableId: qualityTestVariableId!,
            OutcomeId: outcomeId!
          }
    );
  }
}
