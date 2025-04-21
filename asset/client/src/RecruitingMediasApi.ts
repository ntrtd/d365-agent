/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RecruitingMedias } from './RecruitingMedias';
import { RecruitingMediasRequestBuilder } from './RecruitingMediasRequestBuilder';
import { RecruitingProjectsApi } from './RecruitingProjectsApi';
import { MediaApi } from './MediaApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RecruitingMediasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RecruitingMedias<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): RecruitingMediasApi<DeSerializersT> {
    return new RecruitingMediasApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link recruitingProject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_PROJECT: OneToOneLink<
      RecruitingMedias<DeSerializersT>,
      DeSerializersT,
      RecruitingProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedMedia} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_MEDIA: OneToOneLink<
      RecruitingMedias<DeSerializersT>,
      DeSerializersT,
      MediaApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RecruitingProjectsApi<DeSerializersT>,
      MediaApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RECRUITING_PROJECT: new OneToOneLink(
        'RecruitingProject',
        this,
        linkedApis[0]
      ),
      RELATED_MEDIA: new OneToOneLink('RelatedMedia', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = RecruitingMedias;

  requestBuilder(): RecruitingMediasRequestBuilder<DeSerializersT> {
    return new RecruitingMediasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RecruitingMedias<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RecruitingMedias<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RecruitingMedias<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RecruitingMedias, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RecruitingMedias,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RecruitingMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECRUITMENT_PROJECT: OrderableEdmTypeField<
      RecruitingMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MEDIA: OrderableEdmTypeField<
      RecruitingMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      RecruitingMedias<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      RecruitingMedias<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruitingProject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_PROJECT: OneToOneLink<
      RecruitingMedias<DeSerializersT>,
      DeSerializersT,
      RecruitingProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedMedia} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_MEDIA: OneToOneLink<
      RecruitingMedias<DeSerializersT>,
      DeSerializersT,
      MediaApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RecruitingMedias<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link recruitmentProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITMENT_PROJECT: fieldBuilder.buildEdmTypeField(
          'RecruitmentProject',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link media} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEDIA: fieldBuilder.buildEdmTypeField('Media', 'Edm.String', false),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RecruitingMedias)
      };
    }

    return this._schema;
  }
}
