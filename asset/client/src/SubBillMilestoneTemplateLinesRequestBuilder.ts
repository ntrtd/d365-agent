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
import { SubBillMilestoneTemplateLines } from './SubBillMilestoneTemplateLines';

/**
 * Request builder class for operations supported on the {@link SubBillMilestoneTemplateLines} entity.
 */
export class SubBillMilestoneTemplateLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillMilestoneTemplateLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillMilestoneTemplateLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillMilestoneTemplateLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillMilestoneTemplateLines<T>, T> {
    return new GetAllRequestBuilder<SubBillMilestoneTemplateLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillMilestoneTemplateLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillMilestoneTemplateLines`.
   */
  create(
    entity: SubBillMilestoneTemplateLines<T>
  ): CreateRequestBuilder<SubBillMilestoneTemplateLines<T>, T> {
    return new CreateRequestBuilder<SubBillMilestoneTemplateLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillMilestoneTemplateLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillMilestoneTemplateLines.dataAreaId}.
   * @param milestoneTemplate Key property. See {@link SubBillMilestoneTemplateLines.milestoneTemplate}.
   * @param lineNum Key property. See {@link SubBillMilestoneTemplateLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `SubBillMilestoneTemplateLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    milestoneTemplate: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SubBillMilestoneTemplateLines<T>, T> {
    return new GetByKeyRequestBuilder<SubBillMilestoneTemplateLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MilestoneTemplate: milestoneTemplate,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillMilestoneTemplateLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillMilestoneTemplateLines`.
   */
  update(
    entity: SubBillMilestoneTemplateLines<T>
  ): UpdateRequestBuilder<SubBillMilestoneTemplateLines<T>, T> {
    return new UpdateRequestBuilder<SubBillMilestoneTemplateLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillMilestoneTemplateLines`.
   * @param dataAreaId Key property. See {@link SubBillMilestoneTemplateLines.dataAreaId}.
   * @param milestoneTemplate Key property. See {@link SubBillMilestoneTemplateLines.milestoneTemplate}.
   * @param lineNum Key property. See {@link SubBillMilestoneTemplateLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillMilestoneTemplateLines`.
   */
  delete(
    dataAreaId: string,
    milestoneTemplate: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<SubBillMilestoneTemplateLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillMilestoneTemplateLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillMilestoneTemplateLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillMilestoneTemplateLines<T>
  ): DeleteRequestBuilder<SubBillMilestoneTemplateLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    milestoneTemplate?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<SubBillMilestoneTemplateLines<T>, T> {
    return new DeleteRequestBuilder<SubBillMilestoneTemplateLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillMilestoneTemplateLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MilestoneTemplate: milestoneTemplate!,
            LineNum: lineNum!
          }
    );
  }
}
