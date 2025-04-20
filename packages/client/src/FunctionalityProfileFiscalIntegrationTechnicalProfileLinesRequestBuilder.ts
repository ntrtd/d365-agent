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
import { FunctionalityProfileFiscalIntegrationTechnicalProfileLines } from './FunctionalityProfileFiscalIntegrationTechnicalProfileLines';

/**
 * Request builder class for operations supported on the {@link FunctionalityProfileFiscalIntegrationTechnicalProfileLines} entity.
 */
export class FunctionalityProfileFiscalIntegrationTechnicalProfileLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
  T
> {
  /**
   * Returns a request builder for querying all `FunctionalityProfileFiscalIntegrationTechnicalProfileLines` entities.
   * @returns A request builder for creating requests to retrieve all `FunctionalityProfileFiscalIntegrationTechnicalProfileLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FunctionalityProfileFiscalIntegrationTechnicalProfileLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FunctionalityProfileFiscalIntegrationTechnicalProfileLines`.
   */
  create(
    entity: FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>
  ): CreateRequestBuilder<
    FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  > {
    return new CreateRequestBuilder<
      FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FunctionalityProfileFiscalIntegrationTechnicalProfileLines` entity based on its keys.
   * @param functionalityProfileId Key property. See {@link FunctionalityProfileFiscalIntegrationTechnicalProfileLines.functionalityProfileId}.
   * @param fiscalTechnicalProfileId Key property. See {@link FunctionalityProfileFiscalIntegrationTechnicalProfileLines.fiscalTechnicalProfileId}.
   * @returns A request builder for creating requests to retrieve one `FunctionalityProfileFiscalIntegrationTechnicalProfileLines` entity based on its keys.
   */
  getByKey(
    functionalityProfileId: DeserializedType<T, 'Edm.String'>,
    fiscalTechnicalProfileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
      T
    >(this.entityApi, {
      FunctionalityProfileId: functionalityProfileId,
      FiscalTechnicalProfileId: fiscalTechnicalProfileId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FunctionalityProfileFiscalIntegrationTechnicalProfileLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FunctionalityProfileFiscalIntegrationTechnicalProfileLines`.
   */
  update(
    entity: FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>
  ): UpdateRequestBuilder<
    FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  > {
    return new UpdateRequestBuilder<
      FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FunctionalityProfileFiscalIntegrationTechnicalProfileLines`.
   * @param functionalityProfileId Key property. See {@link FunctionalityProfileFiscalIntegrationTechnicalProfileLines.functionalityProfileId}.
   * @param fiscalTechnicalProfileId Key property. See {@link FunctionalityProfileFiscalIntegrationTechnicalProfileLines.fiscalTechnicalProfileId}.
   * @returns A request builder for creating requests that delete an entity of type `FunctionalityProfileFiscalIntegrationTechnicalProfileLines`.
   */
  delete(
    functionalityProfileId: string,
    fiscalTechnicalProfileId: string
  ): DeleteRequestBuilder<
    FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `FunctionalityProfileFiscalIntegrationTechnicalProfileLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FunctionalityProfileFiscalIntegrationTechnicalProfileLines` by taking the entity as a parameter.
   */
  delete(
    entity: FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>
  ): DeleteRequestBuilder<
    FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  >;
  delete(
    functionalityProfileIdOrEntity: any,
    fiscalTechnicalProfileId?: string
  ): DeleteRequestBuilder<
    FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
    T
  > {
    return new DeleteRequestBuilder<
      FunctionalityProfileFiscalIntegrationTechnicalProfileLines<T>,
      T
    >(
      this.entityApi,
      functionalityProfileIdOrEntity instanceof
      FunctionalityProfileFiscalIntegrationTechnicalProfileLines
        ? functionalityProfileIdOrEntity
        : {
            FunctionalityProfileId: functionalityProfileIdOrEntity!,
            FiscalTechnicalProfileId: fiscalTechnicalProfileId!
          }
    );
  }
}
