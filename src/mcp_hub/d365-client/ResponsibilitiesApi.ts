/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Responsibilities } from './Responsibilities';
import { ResponsibilitiesRequestBuilder } from './ResponsibilitiesRequestBuilder';
import { JobTemplateResponsibilitiesApi } from './JobTemplateResponsibilitiesApi';
import { JobResponsibilitiesApi } from './JobResponsibilitiesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ResponsibilitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Responsibilities<DeSerializersT>, DeSerializersT>
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
  ): ResponsibilitiesApi<DeSerializersT> {
    return new ResponsibilitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateResponsibilities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_RESPONSIBILITIES: OneToManyLink<
      Responsibilities<DeSerializersT>,
      DeSerializersT,
      JobTemplateResponsibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobResponsibilities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_RESPONSIBILITIES: OneToManyLink<
      Responsibilities<DeSerializersT>,
      DeSerializersT,
      JobResponsibilitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JobTemplateResponsibilitiesApi<DeSerializersT>,
      JobResponsibilitiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOB_TEMPLATE_RESPONSIBILITIES: new OneToManyLink(
        'JobTemplateResponsibilities',
        this,
        linkedApis[0]
      ),
      JOB_RESPONSIBILITIES: new OneToManyLink(
        'JobResponsibilities',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = Responsibilities;

  requestBuilder(): ResponsibilitiesRequestBuilder<DeSerializersT> {
    return new ResponsibilitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Responsibilities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Responsibilities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Responsibilities<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Responsibilities, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Responsibilities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RESPONSIBILITY_ID: OrderableEdmTypeField<
      Responsibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Responsibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      Responsibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateResponsibilities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_RESPONSIBILITIES: OneToManyLink<
      Responsibilities<DeSerializersT>,
      DeSerializersT,
      JobTemplateResponsibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobResponsibilities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_RESPONSIBILITIES: OneToManyLink<
      Responsibilities<DeSerializersT>,
      DeSerializersT,
      JobResponsibilitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Responsibilities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link responsibilityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBILITY_ID: fieldBuilder.buildEdmTypeField(
          'ResponsibilityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Responsibilities)
      };
    }

    return this._schema;
  }
}
